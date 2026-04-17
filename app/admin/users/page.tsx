"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

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

type AccountType = "CUSTOMER" | "STAFF"
type UserStatus = "Active" | "Online" | "Inactive"

type UserRow = {
  name: string
  email: string
  accountType: AccountType
  status: UserStatus
  registrationDate: string
  avatar: { type: "img"; url: string } | { type: "initials"; value: string }
}

function AccountPill({ type }: { type: AccountType }) {
  return (
    <span className="inline-flex items-center px-3 py-1 bg-surface-container-low text-[10px] tracking-[0.22em] uppercase text-on-surface-variant">
      {type}
    </span>
  )
}

function StatusPill({ status }: { status: UserStatus }) {
  const dot =
    status === "Active" ? "bg-[#2F7D54]" : status === "Online" ? "bg-[#2F7D54]" : "bg-[#B38B2A]"

  return (
    <div className="inline-flex items-center gap-2 text-xs text-on-surface-variant">
      <span className={`w-1.5 h-1.5 ${dot}`} />
      <span className="text-xs">{status}</span>
    </div>
  )
}

export default function AdminUsersPage() {
  const [activeTab, setActiveTab] = useState<
    "ALL" | "CUSTOMERS" | "STAFF" | "SUSPENDED"
  >("ALL")

  const users = useMemo<UserRow[]>(
    () => [
      {
        name: "Elena Rostova",
        email: "elena.rostova@atelier.com",
        accountType: "CUSTOMER",
        status: "Active",
        registrationDate: "Oct 12, 2023",
        avatar: {
          type: "img",
          url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=128",
        },
      },
      {
        name: "Julian Vane",
        email: "julian.v@mamta.int",
        accountType: "STAFF",
        status: "Online",
        registrationDate: "Jan 05, 2024",
        avatar: {
          type: "img",
          url: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=128",
        },
      },
      {
        name: "Sofia Loren-Mendez",
        email: "sofia@couture-house.com",
        accountType: "CUSTOMER",
        status: "Inactive",
        registrationDate: "Nov 28, 2023",
        avatar: {
          type: "img",
          url: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=128",
        },
      },
      {
        name: "Marcus Reed",
        email: "m.reed@design-studio.uk",
        accountType: "CUSTOMER",
        status: "Active",
        registrationDate: "Feb 14, 2024",
        avatar: { type: "initials", value: "MR" },
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

              <Link
                href="/admin/products"
                className="flex items-center gap-3 px-3 py-3 text-sm text-on-surface-variant hover:bg-surface-container-low transition-colors"
              >
                <Icon className="text-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2h12v20H6z" />
                    <path d="M9 6h6" />
                    <path d="M9 10h6" />
                    <path d="M9 14h6" />
                  </svg>
                </Icon>
                Products
              </Link>

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

              {/* Active: Users */}
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-[3px] bg-primary" />
                <Link
                  href="/admin/users"
                  className="flex items-center gap-3 px-3 py-3 text-sm text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <Icon className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </Icon>
                  <span className="font-medium">Users</span>
                </Link>
              </div>
            </div>
          </nav>

          {/* The screenshot shows this CTA still present here */}
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
                    placeholder="Search users or roles..."
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
                    <p className="text-[10px] uppercase tracking-[0.22em] text-outline">
                      Admin
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-outline">
                      System Manager
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-outline-variant/60 overflow-hidden flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-on-surface-variant">
                      A
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
                <h1 className="font-bodoni text-4xl text-on-surface">User Directory</h1>
                <p className="mt-1 text-sm text-secondary max-w-xl">
                  Manage registered customers and internal staff accounts. Monitor
                  registration activity and assigned roles.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="h-10 px-6 border border-outline-variant/70 bg-surface-container-lowest text-[10px] uppercase tracking-[0.22em] text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  Export CSV
                </button>
                <button
                  type="button"
                  className="h-10 px-8 bg-primary text-surface-container-lowest text-[10px] uppercase tracking-[0.22em] font-semibold shadow-[0_10px_22px_rgba(0,0,0,0.15)] hover:bg-on-surface transition-colors"
                >
                  New user
                </button>
              </div>
            </div>

            {/* Tabs + filters */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-outline">
                {[
                  { id: "ALL", label: "All Accounts (1,240)" },
                  { id: "CUSTOMERS", label: "Customers (1,180)" },
                  { id: "STAFF", label: "Staff (60)" },
                  { id: "SUSPENDED", label: "Suspended" },
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

              <button
                type="button"
                className="inline-flex items-center gap-2 text-xs text-outline hover:text-on-surface transition-colors"
              >
                <Icon className="text-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                </Icon>
                Advanced Filters
              </button>
            </div>

            {/* Table */}
            <section className="mt-6 border border-outline-variant/40 bg-surface-container-lowest">
              <div className="px-8">
                <div className="grid grid-cols-[1.6fr_160px_120px_180px_70px] py-5 text-[10px] uppercase tracking-[0.22em] text-outline border-b border-outline-variant/40">
                  <div>User Details</div>
                  <div>Account Type</div>
                  <div>Status</div>
                  <div>Registration Date</div>
                  <div className="text-right">Actions</div>
                </div>
              </div>

              <div className="divide-y divide-outline-variant/30">
                {users.map((u) => (
                  <div key={u.email} className="px-8 py-6">
                    <div className="grid grid-cols-[1.6fr_160px_120px_180px_70px] items-center">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-surface-container-low overflow-hidden flex items-center justify-center">
                          {u.avatar.type === "img" ? (
                            <img
                              src={u.avatar.url}
                              alt={u.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-xs font-semibold text-on-surface-variant">
                              {u.avatar.value}
                            </span>
                          )}
                        </div>
                        <div className="leading-tight">
                          <p className="text-sm text-on-surface font-medium">{u.name}</p>
                          <p className="text-xs text-outline">{u.email}</p>
                        </div>
                      </div>

                      <div>
                        <AccountPill type={u.accountType} />
                      </div>

                      <div>
                        <StatusPill status={u.status} />
                      </div>

                      <div className="text-sm text-on-surface-variant">
                        {u.registrationDate}
                      </div>

                      <div className="flex justify-end text-outline">
                        <button type="button" aria-label="More">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="5" r="1.6" />
                            <circle cx="12" cy="12" r="1.6" />
                            <circle cx="12" cy="19" r="1.6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pagination */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-outline">
                Showing 1 to 4 of 1,240 results
              </p>
              <div className="flex items-center gap-2 text-xs text-outline">
                <button className="w-8 h-8 border border-outline-variant/60 hover:bg-surface-container-low transition-colors">
                  ‹
                </button>
                <button className="w-8 h-8 bg-primary text-white border border-primary">
                  1
                </button>
                <button className="w-8 h-8 border border-outline-variant/60 hover:bg-surface-container-low transition-colors">
                  2
                </button>
                <button className="w-8 h-8 border border-outline-variant/60 hover:bg-surface-container-low transition-colors">
                  3
                </button>
                <button className="w-8 h-8 border border-outline-variant/60 hover:bg-surface-container-low transition-colors">
                  …
                </button>
                <button className="w-8 h-8 border border-outline-variant/60 hover:bg-surface-container-low transition-colors">
                  124
                </button>
                <button className="w-8 h-8 border border-outline-variant/60 hover:bg-surface-container-low transition-colors">
                  ›
                </button>
              </div>
            </div>

            {/* Lower analytics */}
            <div className="mt-10 grid grid-cols-[1fr_360px] gap-6">
              <section className="border border-outline-variant/40 bg-surface-container-lowest p-8">
                <h2 className="font-bodoni text-2xl text-on-surface">
                  User Acquisition
                </h2>

                <div className="mt-10 grid grid-cols-7 items-end gap-6 h-[180px]">
                  {[
                    { d: "MON", h: 36, active: false },
                    { d: "TUE", h: 74, active: false },
                    { d: "WED", h: 48, active: false },
                    { d: "THU", h: 120, active: true },
                    { d: "FRI", h: 86, active: false },
                    { d: "SAT", h: 78, active: false },
                    { d: "SUN", h: 58, active: false },
                  ].map((b) => (
                    <div key={b.d} className="flex flex-col items-center gap-4">
                      <div
                        className={`w-full ${
                          b.active ? "bg-primary" : "bg-outline-variant/35"
                        }`}
                        style={{ height: `${b.h}px` }}
                      />
                      <p className="text-[10px] uppercase tracking-[0.24em] text-outline">
                        {b.d}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <aside className="space-y-6">
                <div className="bg-primary text-surface-container-lowest p-8">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/75">
                    Total verified
                  </p>
                  <p className="mt-4 text-4xl font-bodoni text-white">98.4%</p>
                  <p className="mt-3 text-xs text-white/80 max-w-[22ch]">
                    Security protocol compliance is within standard range for Q1.
                  </p>
                </div>

                <div className="border border-outline-variant/40 bg-surface-container-lowest p-8">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-outline">
                    Account growth
                  </p>
                  <p className="mt-4 text-3xl font-bodoni text-on-surface">
                    +240
                  </p>
                  <p className="mt-3 text-xs text-outline max-w-[30ch]">
                    New registrations in the last 30 calendar days.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

