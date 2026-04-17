"use client"

import Link from "next/link"
import { useMemo } from "react"

function Icon({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      {children}
    </span>
  )
}

type ProductStatus = "LIVE" | "DRAFT"

type ProductRow = {
  image: string
  name: string
  sku: string
  category: "BRIDAL" | "COUTURE"
  price: string
  stock: string
  status: ProductStatus
}

function StatusDot({ status }: { status: ProductStatus }) {
  const dot = status === "LIVE" ? "bg-[#B38B2A]" : "bg-[#C95A5A]"
  const label = status === "LIVE" ? "LIVE" : "DRAFT"
  const text = status === "LIVE" ? "text-on-surface-variant" : "text-on-surface-variant"

  return (
    <div className={`inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase ${text}`}>
      <span className={`w-1.5 h-1.5 ${dot}`} />
      {label}
    </div>
  )
}

export default function AdminProductsPage() {
  const products = useMemo<ProductRow[]>(
    () => [
      {
        image:
          "https://images.unsplash.com/photo-1520975682031-ae7b2b9a72b8?auto=format&fit=crop&q=80&w=600",
        name: "The Ethereal Muse",
        sku: "SKU: MIM-BR-001",
        category: "BRIDAL",
        price: "$12,400",
        stock: "08",
        status: "LIVE",
      },
      {
        image:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600",
        name: "Velvet Nocturne",
        sku: "SKU: MIM-CT-042",
        category: "COUTURE",
        price: "$8,900",
        stock: "14",
        status: "LIVE",
      },
      {
        image:
          "https://images.unsplash.com/photo-1520975890107-a25f9bdba2c9?auto=format&fit=crop&q=80&w=600",
        name: "Gilded Heritage",
        sku: "SKU: MIM-CT-091",
        category: "COUTURE",
        price: "$15,750",
        stock: "02",
        status: "DRAFT",
      },
    ],
    [],
  )

  return (
    <div className="min-h-screen bg-surface">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-[250px] shrink-0 border-r border-outline-variant/40 bg-surface-container-lowest">
          <div className="px-7 pt-7 pb-6">
            <div className="leading-none">
              <p className="font-bodoni text-sm tracking-[0.24em] text-primary uppercase">
                MAMTA
              </p>
              <p className="mt-1 text-[10px] tracking-[0.38em] uppercase text-outline">
                INTERNATIONAL
              </p>
            </div>
          </div>

          <nav className="px-5">
            <div className="space-y-1">
              <Link
                href="/admin"
                className="flex items-center gap-3 px-3 py-3 text-sm text-on-surface-variant hover:bg-surface-container-low transition-colors"
              >
                <Icon className="text-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h8v8H3z" />
                    <path d="M13 3h8v5h-8z" />
                    <path d="M13 10h8v11h-8z" />
                    <path d="M3 13h8v8H3z" />
                  </svg>
                </Icon>
                Dashboard
              </Link>

              {/* Active: Products */}
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-[3px] bg-primary" />
                <Link
                  href="/admin/products"
                  className="flex items-center gap-3 px-3 py-3 text-sm text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <Icon className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2h12v20H6z" />
                      <path d="M9 6h6" />
                      <path d="M9 10h6" />
                      <path d="M9 14h6" />
                    </svg>
                  </Icon>
                  <span className="font-medium">Products</span>
                </Link>
              </div>

              <Link
                href="/admin"
                className="flex items-center gap-3 px-3 py-3 text-sm text-on-surface-variant hover:bg-surface-container-low transition-colors"
              >
                <Icon className="text-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </Icon>
                Orders
              </Link>

              <Link
                href="/admin/users"
                className="flex items-center gap-3 px-3 py-3 text-sm text-on-surface-variant hover:bg-surface-container-low transition-colors"
              >
                <Icon className="text-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </Icon>
                Users
              </Link>
            </div>
          </nav>

          <div className="mt-[320px] px-6">
            <button
              type="button"
              className="w-full h-12 bg-primary text-surface-container-lowest text-[10px] uppercase tracking-[0.26em] font-semibold shadow-[0_10px_22px_rgba(0,0,0,0.12)] hover:bg-on-surface transition-colors"
            >
              Add Product
            </button>
          </div>

          <div className="mt-auto px-5 pb-7 pt-10">
            <div className="space-y-2 text-sm text-on-surface-variant">
              <Link href="#" className="flex items-center gap-3 px-3 py-3 hover:bg-surface-container-low transition-colors">
                <Icon className="text-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 1 0 2l-.22.38a2 2 0 0 0 .73 2.73l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 1 0-2l.22-.38a2 2 0 0 0-.73-2.73l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </Icon>
                Settings
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-3 hover:bg-surface-container-low transition-colors">
                <Icon className="text-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                    <path d="M8 9h8" />
                    <path d="M8 13h5" />
                  </svg>
                </Icon>
                Support
              </Link>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1">
          {/* Top bar */}
          <div className="h-[64px] border-b border-outline-variant/40 bg-surface-container-lowest">
            <div className="h-full px-10 flex items-center justify-between">
              <div className="w-[520px] max-w-[55%]">
                <div className="flex items-center gap-3 border border-outline-variant/50 bg-surface px-4 py-2.5">
                  <Icon className="text-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </Icon>
                  <input
                    className="w-full bg-transparent outline-none text-sm placeholder:text-outline/60"
                    placeholder="Search collection..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <button type="button" className="text-outline hover:text-on-surface transition-colors" aria-label="Notifications">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </button>
                <button type="button" className="text-outline hover:text-on-surface transition-colors" aria-label="Settings">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 1 0 2l-.22.38a2 2 0 0 0 .73 2.73l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 1 0-2l.22-.38a2 2 0 0 0-.73-2.73l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>

                <div className="flex items-center gap-3">
                  <div className="text-right leading-tight">
                    <p className="text-sm text-on-surface">Elena Vance</p>
                    <p className="text-[10px] uppercase tracking-[0.26em] text-outline">
                      Senior Curator
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-outline-variant/60 overflow-hidden flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-on-surface-variant">
                      EV
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-10 py-10">
            <div className="flex items-start justify-between gap-10">
              <div>
                <h1 className="font-bodoni text-4xl text-on-surface">
                  Inventory Management
                </h1>
                <p className="mt-1 text-sm text-secondary max-w-xl">
                  Refine and curate the Mamta International seasonal collections.
                  Every piece is a masterpiece of silk and light.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="h-10 px-6 border border-outline-variant/70 bg-surface-container-lowest text-[10px] uppercase tracking-[0.22em] text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  Export catalog
                </button>
                <button
                  type="button"
                  className="h-10 px-8 bg-primary text-surface-container-lowest text-[10px] uppercase tracking-[0.22em] font-semibold shadow-[0_10px_22px_rgba(0,0,0,0.15)] hover:bg-on-surface transition-colors"
                >
                  New product
                </button>
              </div>
            </div>

            {/* Metric tiles */}
            <div className="mt-10 grid grid-cols-4 gap-6">
              {[
                { label: "Total Pieces", value: "1,284" },
                { label: "Bridal Active", value: "452" },
                { label: "Couture Line", value: "832" },
                { label: "Monthly Growth", value: "+12.5%" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="border border-outline-variant/40 bg-surface-container-lowest p-6"
                >
                  <p className="text-[10px] uppercase tracking-[0.28em] text-outline">
                    {m.label}
                  </p>
                  <p className="mt-3 text-2xl font-bodoni text-primary">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Table */}
            <section className="mt-10 border border-outline-variant/40 bg-surface-container-lowest">
              <div className="px-8">
                <div className="grid grid-cols-[120px_1.4fr_160px_120px_90px_120px_100px] py-5 text-[10px] uppercase tracking-[0.22em] text-outline border-b border-outline-variant/40">
                  <div>Image</div>
                  <div>Gown Name</div>
                  <div>Category</div>
                  <div>Price</div>
                  <div>Stock</div>
                  <div>Status</div>
                  <div className="text-right">Actions</div>
                </div>
              </div>

              <div className="divide-y divide-outline-variant/30">
                {products.map((p) => (
                  <div key={p.sku} className="px-8 py-7">
                    <div className="grid grid-cols-[120px_1.4fr_160px_120px_90px_120px_100px] items-center">
                      <div className="w-[56px] h-[78px] bg-surface-container-low overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="leading-tight">
                        <p className="font-bodoni text-lg text-on-surface">
                          {p.name.split(" ").slice(0, 2).join(" ")}
                        </p>
                        <p className="font-bodoni text-lg text-on-surface">
                          {p.name.split(" ").slice(2).join(" ")}
                        </p>
                        <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-outline">
                          {p.sku}
                        </p>
                      </div>

                      <div>
                        <span className="inline-flex items-center px-3 py-1 bg-surface-container-low text-[10px] tracking-[0.22em] uppercase text-on-surface-variant">
                          {p.category}
                        </span>
                      </div>

                      <div className="text-sm text-primary font-medium">
                        {p.price}
                      </div>

                      <div className="text-sm text-on-surface-variant">
                        {p.stock}
                      </div>

                      <div>
                        <StatusDot status={p.status} />
                      </div>

                      <div className="flex justify-end items-center gap-4 text-outline">
                        <button type="button" aria-label="Edit" className="hover:text-on-surface transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                          </svg>
                        </button>
                        <button type="button" aria-label="Delete" className="hover:text-on-surface transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer pagination */}
            <div className="mt-6 flex items-center justify-between text-xs text-outline">
              <p className="text-[10px] uppercase tracking-[0.28em]">
                Showing 1-10 of 1,284 products
              </p>
              <div className="flex items-center gap-3">
                <button className="w-9 h-9 border border-outline-variant/50 hover:bg-surface-container-low transition-colors text-on-surface-variant">
                  ‹
                </button>
                <p className="text-[10px] tracking-[0.22em] text-on-surface-variant">
                  Page 1 of 128
                </p>
                <button className="w-9 h-9 border border-outline-variant/50 hover:bg-surface-container-low transition-colors text-on-surface-variant">
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

