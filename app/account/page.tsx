import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default async function AccountPage() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single()

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(5)

  const { data: wishlistCount } = await supabase
    .from("wishlist")
    .select("id", { count: "exact" })
    .eq("user_id", user.id)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface-container-lowest pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bodoni text-on-surface uppercase tracking-wide mb-8">
            My Account
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <nav className="space-y-1">
                <Link 
                  href="/account" 
                  className="block py-3 px-4 bg-on-surface text-surface-container-lowest text-sm uppercase tracking-wide"
                >
                  Overview
                </Link>
                <Link 
                  href="/account/orders" 
                  className="block py-3 px-4 text-on-surface hover:bg-outline-variant/20 text-sm uppercase tracking-wide transition-colors"
                >
                  Order History
                </Link>
                <Link 
                  href="/wishlist" 
                  className="block py-3 px-4 text-on-surface hover:bg-outline-variant/20 text-sm uppercase tracking-wide transition-colors"
                >
                  Wishlist
                </Link>
                <Link 
                  href="/account/settings" 
                  className="block py-3 px-4 text-on-surface hover:bg-outline-variant/20 text-sm uppercase tracking-wide transition-colors"
                >
                  Account Settings
                </Link>
                <form action="/auth/signout" method="POST">
                  <button 
                    type="submit"
                    className="w-full text-left py-3 px-4 text-on-surface hover:bg-outline-variant/20 text-sm uppercase tracking-wide transition-colors"
                  >
                    Sign Out
                  </button>
                </form>
              </nav>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Welcome Section */}
              <div className="bg-white border border-outline-variant p-6">
                <h2 className="text-lg font-medium text-on-surface uppercase tracking-wide mb-2">
                  Welcome back, {profile?.first_name || user.email?.split("@")[0]}
                </h2>
                <p className="text-on-surface/70 text-sm">
                  {user.email}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-outline-variant p-6 text-center">
                  <p className="text-3xl font-bodoni text-on-surface mb-1">
                    {orders?.length || 0}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-on-surface/70">
                    Orders
                  </p>
                </div>
                <div className="bg-white border border-outline-variant p-6 text-center">
                  <p className="text-3xl font-bodoni text-on-surface mb-1">
                    {wishlistCount?.length || 0}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-on-surface/70">
                    Wishlist Items
                  </p>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white border border-outline-variant p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-on-surface uppercase tracking-wide">
                    Recent Orders
                  </h3>
                  <Link href="/account/orders" className="text-xs text-on-surface underline hover:no-underline uppercase tracking-wide">
                    View All
                  </Link>
                </div>
                
                {orders && orders.length > 0 ? (
                  <div className="space-y-3">
                    {orders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between py-3 border-b border-outline-variant last:border-0">
                        <div>
                          <p className="text-sm text-on-surface">Order #{order.id.slice(0, 8)}</p>
                          <p className="text-xs text-on-surface/60">
                            {new Date(order.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-on-surface">${order.total_amount}</p>
                          <p className="text-xs uppercase text-on-surface/60">{order.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-on-surface/60 text-center py-8">
                    No orders yet
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
