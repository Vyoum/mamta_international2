"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

type Status = "DELIVERED" | "SHIPPED" | "PENDING"

type Order = {
  id: string
  customer: { name: string; email: string; initials: string }
  acquisitionDate: string
  valuation: string
  status: Status
  expanded?: boolean
}

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

function StatusPill({ status }: { status: Status }) {
  const styles =
    status === "DELIVERED"
      ? "bg-[#DFF2E6] text-[#1E7A44]"
      : status === "SHIPPED"
        ? "bg-[#F2E9D8] text-[#7A5A1E]"
        : "bg-[#EEE9DF] text-[#6A6258]"

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold ${styles}`}
    >
      {status}
    </span>
  )
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<
    "ALL" | "PENDING" | "IN_TRANSIT" | "ARCHIVED"
  >("ALL")

  const orders: Order[] = useMemo(
    () => [
      {
        id: "#MT-88421",
        customer: { name: "Sophia Chen", email: "sophia.c@haute.com", initials: "SC" },
        acquisitionDate: "Oct 24, 2023",
        valuation: "$4,850.00",
        status: "DELIVERED",
      },
      {
        id: "#MT-88422",
        customer: {
          name: "Julian Montgomery",
          email: "monty@noirart.co",
          initials: "JM",
        },
        acquisitionDate: "Oct 25, 2023",
        valuation: "$12,400.00",
        status: "SHIPPED",
      },
      {
        id: "#MT-88423",
        customer: {
          name: "Amara Lawson",
          email: "lawson.studio@design.uk",
          initials: "AL",
        },
        acquisitionDate: "Oct 26, 2023",
        valuation: "$2,100.00",
        status: "PENDING",
        expanded: true,
      },
      {
        id: "#MT-88424",
        customer: { name: "Bartholomew King", email: "b.ings@esthete.us", initials: "BK" },
        acquisitionDate: "Oct 26, 2023",
        valuation: "$7,300.00",
        status: "DELIVERED",
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3h8v8H3z" />
                    <path d="M13 3h8v5h-8z" />
                    <path d="M13 10h8v11h-8z" />
                    <path d="M3 13h8v8H3z" />
                  </svg>
                </Icon>
                Dashboard
              </Link>

              <Link
                href="/admin/products"
                className="flex items-center gap-3 px-3 py-3 text-sm text-on-surface-variant hover:bg-surface-container-low transition-colors"
              >
                <Icon className="text-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2h12v20H6z" />
                    <path d="M9 6h6" />
                    <path d="M9 10h6" />
                    <path d="M9 14h6" />
                  </svg>
                </Icon>
                Products
              </Link>

              {/* Active: Orders */}
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-[3px] bg-primary" />
                <Link
                  href="/admin"
                  className="flex items-center gap-3 px-3 py-3 text-sm text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <Icon className="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </Icon>
                  <span className="font-medium">Orders</span>
                </Link>
              </div>

              <Link
                href="/admin/users"
                className="flex items-center gap-3 px-3 py-3 text-sm text-on-surface-variant hover:bg-surface-container-low transition-colors"
              >
                <Icon className="text-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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

          <div className="mt-auto px-5 pb-7 pt-10">
            <div className="space-y-2 text-sm text-on-surface-variant">
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 hover:bg-surface-container-low transition-colors"
              >
                <Icon className="text-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 1 0 2l-.22.38a2 2 0 0 0 .73 2.73l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 1 0-2l.22-.38a2 2 0 0 0-.73-2.73l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </Icon>
                Settings
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 hover:bg-surface-container-low transition-colors"
              >
                <Icon className="text-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </Icon>
                  <input
                    className="w-full bg-transparent outline-none text-sm placeholder:text-outline/60"
                    placeholder="Search orders..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <button
                  type="button"
                  className="text-outline hover:text-on-surface transition-colors"
                  aria-label="Notifications"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="text-outline hover:text-on-surface transition-colors"
                  aria-label="Settings"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 1 0 2l-.22.38a2 2 0 0 0 .73 2.73l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 1 0-2l.22-.38a2 2 0 0 0-.73-2.73l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>

                <div className="flex items-center gap-3">
                  <div className="text-right leading-tight">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-outline">
                      Administrator
                    </p>
                    <p className="text-xs text-on-surface-variant">E. Thompson</p>
                  </div>
                  <div className="w-8 h-8 bg-outline-variant/60 overflow-hidden flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-on-surface-variant">
                      ET
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
                  Order Management
                </h1>
                <p className="mt-1 text-sm text-secondary">
                  Curating the season&apos;s acquisitions and logistics.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="h-10 px-5 border border-outline-variant/70 bg-surface-container-lowest text-[10px] uppercase tracking-[0.22em] text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  Export report
                </button>
                <button
                  type="button"
                  className="h-10 px-6 bg-primary text-surface-container-lowest text-[10px] uppercase tracking-[0.22em] font-semibold shadow-[0_10px_22px_rgba(0,0,0,0.15)] hover:bg-on-surface transition-colors"
                >
                  Create manual order
                </button>
              </div>
            </div>

            {/* KPI row */}
            <div className="mt-10 grid grid-cols-[1fr_360px] gap-6">
              <section className="border border-outline-variant/40 bg-surface-container-lowest relative overflow-hidden">
                <div className="absolute right-6 top-8 opacity-[0.06]">
                  <svg
                    width="220"
                    height="140"
                    viewBox="0 0 220 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 110 L60 75 L105 95 L140 52 L180 68 L210 30"
                      stroke="#000"
                      strokeWidth="4"
                    />
                    <path
                      d="M10 110 L60 75 L105 95 L140 52 L180 68 L210 30"
                      stroke="#000"
                      strokeWidth="14"
                      opacity="0.25"
                    />
                  </svg>
                </div>

                <div className="p-8">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-outline">
                    Fulfillment velocity
                  </p>
                  <p className="mt-4 text-xl text-on-surface">
                    <span className="font-medium">98.4%</span>{" "}
                    <span className="text-on-surface-variant">
                      On-time delivery this month.
                    </span>
                  </p>

                  <div className="mt-8 flex items-end gap-14">
                    <div>
                      <p className="text-lg text-on-surface">1,240</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-outline">
                        Total shipped
                      </p>
                    </div>
                    <div>
                      <p className="text-lg text-primary">$412.5k</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-outline">
                        Revenue stream
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <aside className="bg-primary text-surface-container-lowest p-8">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/75">
                  Active alerts
                </p>
                <p className="mt-5 text-lg leading-snug">
                  4 Priority shipping requests require your signature.
                </p>
                <button
                  type="button"
                  className="mt-7 h-9 px-5 border border-white/35 bg-white/0 text-[10px] uppercase tracking-[0.22em] hover:bg-white/10 transition-colors"
                >
                  Review requests
                </button>
              </aside>
            </div>

            {/* Orders table */}
            <section className="mt-10 border border-outline-variant/40 bg-surface-container-lowest">
              {/* Tabs */}
              <div className="px-8 pt-6 pb-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-outline">
                    {[
                      { id: "ALL", label: "All Orders" },
                      { id: "PENDING", label: "Pending" },
                      { id: "IN_TRANSIT", label: "In Transit" },
                      { id: "ARCHIVED", label: "Archived" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setActiveTab(t.id as any)}
                        className={`pb-4 transition-colors ${
                          activeTab === t.id
                            ? "text-on-surface border-b border-primary"
                            : "hover:text-on-surface"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-outline">
                    <button type="button" aria-label="Filter">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 21v-7" />
                        <path d="M4 10V3" />
                        <path d="M12 21v-9" />
                        <path d="M12 8V3" />
                        <path d="M20 21v-5" />
                        <path d="M20 12V3" />
                        <path d="M2 14h4" />
                        <path d="M10 8h4" />
                        <path d="M18 16h4" />
                      </svg>
                    </button>
                    <button type="button" aria-label="Sort">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M11 5h10" />
                        <path d="M11 9h7" />
                        <path d="M11 13h10" />
                        <path d="M11 17h7" />
                        <path d="M3 7l3-3 3 3" />
                        <path d="M6 4v16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Table header */}
              <div className="px-8">
                <div className="grid grid-cols-[150px_1.4fr_170px_160px_140px_80px] py-5 text-[10px] uppercase tracking-[0.22em] text-outline border-t border-outline-variant/40">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Acquisition Date</div>
                  <div>Valuation</div>
                  <div>Status</div>
                  <div className="text-right">Actions</div>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-outline-variant/40">
                {orders.map((o) => (
                  <div key={o.id}>
                    <div className="px-8 py-6">
                      <div className="grid grid-cols-[150px_1.4fr_170px_160px_140px_80px] items-center">
                        <div className="text-sm text-on-surface-variant font-medium">
                          {o.id}
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-surface-container-low flex items-center justify-center text-[10px] font-semibold text-on-surface-variant">
                            {o.customer.initials}
                          </div>
                          <div className="leading-tight">
                            <p className="text-sm text-on-surface">{o.customer.name}</p>
                            <p className="text-xs text-outline">{o.customer.email}</p>
                          </div>
                        </div>
                        <div className="text-sm text-on-surface-variant">
                          {o.acquisitionDate}
                        </div>
                        <div className="text-sm text-primary font-medium">
                          {o.valuation}
                        </div>
                        <div>
                          <StatusPill status={o.status} />
                        </div>
                        <div className="flex justify-end text-outline">
                          <button type="button" aria-label="Expand">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded */}
                    {o.expanded && (
                      <div className="px-8 pb-8">
                        <div className="grid grid-cols-[1.4fr_360px] gap-8 pt-2">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.28em] text-outline mb-5">
                              Itemized Manifest
                            </p>
                            <div className="space-y-6">
                              <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-surface-container-low flex items-center justify-center">
                                  <span className="text-sm">🥂</span>
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-on-surface">
                                    Midnight Silk Evening Gown
                                  </p>
                                  <p className="text-xs text-outline">
                                    Size: FR 38 | Color: Obsidian
                                  </p>
                                </div>
                                <p className="text-sm text-on-surface-variant">
                                  $1,850.00
                                </p>
                              </div>

                              <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-surface-container-low flex items-center justify-center">
                                  <span className="text-sm">🕊️</span>
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-on-surface">
                                    Chantilly Lace Accessory
                                  </p>
                                  <p className="text-xs text-outline">Standard Edition</p>
                                </div>
                                <p className="text-sm text-on-surface-variant">
                                  $250.00
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <p className="text-[10px] uppercase tracking-[0.28em] text-outline mb-5">
                              Shipping Intelligence
                            </p>
                            <div className="text-xs text-on-surface-variant space-y-4">
                              <div>
                                <p className="text-[10px] uppercase tracking-[0.22em] text-outline">
                                  Address
                                </p>
                                <p className="mt-2 leading-relaxed">
                                  24 Rue du Faubourg Saint-Honoré
                                  <br />
                                  75008 Paris, France
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] uppercase tracking-[0.22em] text-outline">
                                  Carrier
                                </p>
                                <p className="mt-2">Global Express Concierge</p>
                              </div>
                              <button
                                type="button"
                                className="mt-3 h-10 w-full bg-primary text-surface-container-lowest text-[10px] uppercase tracking-[0.22em] font-semibold hover:bg-on-surface transition-colors"
                              >
                                Authorize shipment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="px-8 py-6 border-t border-outline-variant/40">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-outline">
                    Displaying 1–15 of 142 Acquisitions
                  </p>
                  <div className="flex items-center gap-2 text-xs text-outline">
                    <button className="w-8 h-8 border border-outline-variant/60 hover:bg-surface-container-low transition-colors">
                      1
                    </button>
                    <button className="w-8 h-8 bg-primary text-white border border-primary">
                      2
                    </button>
                    <button className="w-8 h-8 border border-outline-variant/60 hover:bg-surface-container-low transition-colors">
                      3
                    </button>
                    <button className="w-8 h-8 border border-outline-variant/60 hover:bg-surface-container-low transition-colors">
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer motif */}
            <div className="mt-14 flex items-center justify-center gap-10 text-[10px] tracking-[0.5em] uppercase text-outline/60">
              <span>Heritage</span>
              <span className="w-16 h-px bg-outline-variant/60" />
              <span>Craft</span>
              <span className="w-16 h-px bg-outline-variant/60" />
              <span>Luxury</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

