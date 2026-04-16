import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sort?: string }>
}) {
  const params = await searchParams
  const supabase = await createClient()
  
  let query = supabase
    .from("products")
    .select(`
      *,
      categories (
        id,
        name,
        slug
      )
    `)
    .eq("is_active", true)
  
  // Filter by category
  if (params.category) {
    const { data: category } = await supabase
      .from("categories")
      .select("id")
      .eq("slug", params.category)
      .single()
    
    if (category) {
      query = query.eq("category_id", category.id)
    }
  }
  
  // Sort
  if (params.sort === "price-asc") {
    query = query.order("price", { ascending: true })
  } else if (params.sort === "price-desc") {
    query = query.order("price", { ascending: false })
  } else if (params.sort === "newest") {
    query = query.order("created_at", { ascending: false })
  } else {
    query = query.order("created_at", { ascending: false })
  }
  
  const { data: products } = await query
  
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("name")

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface-container-lowest pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h1 className="text-2xl md:text-3xl font-bodoni text-on-surface uppercase tracking-wide">
              {params.category ? params.category.replace("-", " ") : "All Products"}
            </h1>
            
            <div className="flex items-center gap-4">
              <select 
                className="bg-transparent border border-on-surface/20 py-2 px-4 text-sm text-on-surface uppercase tracking-wide focus:outline-none focus:border-on-surface"
                defaultValue={params.sort || "newest"}
              >
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <aside className="lg:w-56 flex-shrink-0">
              <h3 className="text-xs font-medium text-on-surface uppercase tracking-wide mb-4">
                Categories
              </h3>
              <nav className="space-y-2">
                <Link 
                  href="/products"
                  className={`block text-sm hover:text-on-surface transition-colors ${!params.category ? "text-on-surface font-medium" : "text-on-surface/60"}`}
                >
                  All Products
                </Link>
                {categories?.map((category) => (
                  <Link 
                    key={category.id}
                    href={`/products?category=${category.slug}`}
                    className={`block text-sm hover:text-on-surface transition-colors ${params.category === category.slug ? "text-on-surface font-medium" : "text-on-surface/60"}`}
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {products && products.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                  {products.map((product) => (
                    <Link 
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="group"
                    >
                      <div className="aspect-[3/4] bg-outline-variant/10 relative overflow-hidden mb-3">
                        {product.images?.[0] ? (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
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
                        {product.name}
                      </h3>
                      <p className="text-sm text-on-surface/70">
                        ${product.price?.toLocaleString()}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-sm text-on-surface/60">
                    No products found
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
