import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import RemoveFromWishlistButton from "@/components/RemoveFromWishlistButton"

type WishlistItem = {
  id: string
  created_at: string
  products: {
    id: string
    name: string
    price: number
    images: string[]
    slug: string
  } | null
}

export default async function WishlistPage() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect("/auth/login")
  }

  const { data: wishlistItems } = await supabase
    .from("wishlist")
    .select(`
      id,
      created_at,
      products (
        id,
        name,
        price,
        images,
        slug
      )
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false }) as { data: WishlistItem[] | null }

  return (
    <div className="min-h-screen bg-surface-container-lowest pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-2xl md:text-3xl font-bodoni text-on-surface uppercase tracking-wide mb-8">
            My Wishlist
          </h1>

          {wishlistItems && wishlistItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="group relative">
                  <Link href={`/products/${item.products?.slug}`} className="block">
                    <div className="aspect-[3/4] bg-outline-variant/10 relative overflow-hidden mb-3">
                      {item.products?.images?.[0] ? (
                        <Image
                          src={item.products.images[0]}
                          alt={item.products.name || "Product"}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-on-surface/30">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                            <circle cx="9" cy="9" r="2"/>
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <h3 className="text-sm text-on-surface uppercase tracking-wide mb-1 line-clamp-2">
                      {item.products?.name}
                    </h3>
                    <p className="text-sm text-on-surface/70">
                      ${item.products?.price?.toLocaleString()}
                    </p>
                  </Link>
                  
                  {/* Remove Button */}
                  <RemoveFromWishlistButton wishlistId={item.id} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 border border-on-surface/20 rounded-full flex items-center justify-center text-on-surface/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <h2 className="text-lg font-medium text-on-surface uppercase tracking-wide mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-sm text-on-surface/60 mb-6">
                Save your favorite items to your wishlist and they&apos;ll appear here.
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
      </div>
  )
}
