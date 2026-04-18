import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default async function OrdersPage() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect("/auth/login")
  }

  const { data: orders } = await supabase
    .from("orders")
    .select(`
      *,
      order_items (
        id,
        quantity,
        price,
        products (
          id,
          name,
          slug,
          images
        )
      )
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface-container-lowest pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/account" className="text-on-surface/60 hover:text-on-surface">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bodoni text-on-surface uppercase tracking-wide">
              Order History
            </h1>
          </div>

          {orders && orders.length > 0 ? (
            <div className="space-y-6">
              {orders.map((order: {
  id: string
  created_at: string
  total_amount: number
  status: string
  shipping_address: { street?: string; city?: string; country?: string } | string | null
  order_items?: {
    id: string
    quantity: number
    price: number
    products: {
      id: string
      name: string
      slug: string
      images: string[]
    } | null
  }[]
}) => (
                <div key={order.id} className="bg-white border border-outline-variant">
                  {/* Order Header */}
                  <div className="p-4 md:p-6 border-b border-outline-variant">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <p className="text-xs text-on-surface/60 uppercase tracking-wide mb-1">
                          Order Number
                        </p>
                        <p className="text-sm font-medium text-on-surface">
                          #{order.id.slice(0, 8).toUpperCase()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-on-surface/60 uppercase tracking-wide mb-1">
                          Date
                        </p>
                        <p className="text-sm text-on-surface">
                          {new Date(order.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-on-surface/60 uppercase tracking-wide mb-1">
                          Total
                        </p>
                        <p className="text-sm font-medium text-on-surface">
                          ${order.total_amount?.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <span className={`inline-block px-3 py-1 text-xs uppercase tracking-wide ${
                          order.status === "delivered" 
                            ? "bg-green-100 text-green-800" 
                            : order.status === "cancelled"
                            ? "bg-red-100 text-red-800"
                            : order.status === "shipped"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-outline-variant/30 text-on-surface"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="p-4 md:p-6">
                    <div className="space-y-4">
                      {order.order_items?.map((item: {
                        id: string;
                        quantity: number;
                        price: number;
                        products: {
                          id: string;
                          name: string;
                          slug: string;
                          images: string[];
                        } | null;
                      }) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="w-20 h-24 bg-outline-variant/10 relative flex-shrink-0">
                            {item.products?.images?.[0] ? (
                              <Image
                                src={item.products.images[0]}
                                alt={item.products.name || "Product"}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-on-surface/30">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                                  <circle cx="9" cy="9" r="2"/>
                                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <Link 
                              href={`/products/${item.products?.slug}`}
                              className="text-sm text-on-surface uppercase tracking-wide hover:underline"
                            >
                              {item.products?.name}
                            </Link>
                            <p className="text-xs text-on-surface/60 mt-1">
                              Qty: {item.quantity}
                            </p>
                            <p className="text-sm text-on-surface mt-1">
                              ${item.price?.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Address */}
                  {order.shipping_address && (
                    <div className="p-4 md:p-6 border-t border-outline-variant">
                      <p className="text-xs text-on-surface/60 uppercase tracking-wide mb-2">
                        Shipping Address
                      </p>
                      <p className="text-sm text-on-surface">
                        {typeof order.shipping_address === "object" 
                          ? `${(order.shipping_address as { street?: string }).street || ""}, ${(order.shipping_address as { city?: string }).city || ""}, ${(order.shipping_address as { country?: string }).country || ""}`
                          : order.shipping_address
                        }
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-outline-variant">
              <div className="w-16 h-16 mx-auto mb-6 border border-on-surface/20 rounded-full flex items-center justify-center text-on-surface/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                  <path d="M3 6h18"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </div>
              <h2 className="text-lg font-medium text-on-surface uppercase tracking-wide mb-2">
                No orders yet
              </h2>
              <p className="text-sm text-on-surface/60 mb-6">
                When you place orders, they&apos;ll appear here.
              </p>
              <Link 
                href="/products" 
                className="inline-block bg-on-surface text-surface-container-lowest py-3 px-8 text-sm uppercase tracking-wide hover:bg-on-surface/90 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
