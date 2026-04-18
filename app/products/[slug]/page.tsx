import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import AddToWishlistButton from "@/components/AddToWishlistButton"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()
  
  const { data: product } = await supabase
    .from("products")
    .select(`
      *,
      categories (
        id,
        name,
        slug
      )
    `)
    .eq("slug", slug)
    .eq("is_active", true)
    .single()
  
  if (!product) {
    notFound()
  }

  // Get related products
  const { data: relatedProducts } = await supabase
    .from("products")
    .select("*")
    .eq("category_id", product.category_id)
    .neq("id", product.id)
    .eq("is_active", true)
    .limit(4)

  return (
    <div className="min-h-screen bg-surface-container-lowest pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-on-surface/60">
              <li>
                <Link href="/" className="hover:text-on-surface">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/products" className="hover:text-on-surface">Products</Link>
              </li>
              {product.categories && (
                <>
                  <li>/</li>
                  <li>
                    <Link href={`/products?category=${product.categories.slug}`} className="hover:text-on-surface">
                      {product.categories.name}
                    </Link>
                  </li>
                </>
              )}
              <li>/</li>
              <li className="text-on-surface">{product.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-outline-variant/10 relative overflow-hidden">
                {product.images?.[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-on-surface/30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                      <circle cx="9" cy="9" r="2"/>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.slice(0, 4).map((image: string, index: number) => (
                    <div key={index} className="aspect-square bg-outline-variant/10 relative overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:py-8">
              <h1 className="text-2xl md:text-3xl font-bodoni text-on-surface uppercase tracking-wide mb-4">
                {product.name}
              </h1>
              
              <p className="text-2xl text-on-surface mb-6">
                ${product.price?.toLocaleString()}
              </p>

              {product.description && (
                <div className="prose prose-sm text-on-surface/70 mb-8">
                  <p>{product.description}</p>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-medium text-on-surface uppercase tracking-wide mb-3">
                    Size
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size: string) => (
                      <button
                        key={size}
                        className="min-w-[44px] h-10 border border-on-surface/20 hover:border-on-surface px-3 text-sm text-on-surface uppercase tracking-wide transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xs font-medium text-on-surface uppercase tracking-wide mb-3">
                    Color
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color: string) => (
                      <button
                        key={color}
                        className="h-10 border border-on-surface/20 hover:border-on-surface px-4 text-sm text-on-surface uppercase tracking-wide transition-colors"
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <button className="flex-1 bg-on-surface text-surface-container-lowest py-4 px-8 text-sm uppercase tracking-wide hover:bg-on-surface/90 transition-colors">
                  Add to Cart
                </button>
                <AddToWishlistButton productId={product.id} />
              </div>

              {/* Product Details */}
              <div className="border-t border-outline-variant pt-8 space-y-4">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-2 text-sm uppercase tracking-wide text-on-surface">
                    Product Details
                    <svg className="w-4 h-4 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </summary>
                  <div className="py-4 text-sm text-on-surface/70">
                    <p>SKU: {product.sku || "N/A"}</p>
                    {product.categories && (
                      <p>Category: {product.categories.name}</p>
                    )}
                    <p>Stock: {product.stock_quantity > 0 ? "In Stock" : "Out of Stock"}</p>
                  </div>
                </details>

                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-2 text-sm uppercase tracking-wide text-on-surface">
                    Shipping & Returns
                    <svg className="w-4 h-4 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </summary>
                  <div className="py-4 text-sm text-on-surface/70">
                    <p>Free shipping on orders over $500. Returns accepted within 14 days of delivery.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts && relatedProducts.length > 0 && (
            <section className="mt-16 pt-16 border-t border-outline-variant">
              <h2 className="text-xl font-bodoni text-on-surface uppercase tracking-wide mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((item) => (
                  <Link 
                    key={item.id}
                    href={`/products/${item.slug}`}
                    className="group"
                  >
                    <div className="aspect-[3/4] bg-outline-variant/10 relative overflow-hidden mb-3">
                      {item.images?.[0] ? (
                        <Image
                          src={item.images[0]}
                          alt={item.name}
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
                    <h3 className="text-sm text-on-surface uppercase tracking-wide mb-1 line-clamp-2 group-hover:underline">
                      {item.name}
                    </h3>
                    <p className="text-sm text-on-surface/70">
                      ${item.price?.toLocaleString()}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
  )
}
