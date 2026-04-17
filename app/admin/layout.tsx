import type { ReactNode } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
  // Admin UI is intentionally separate from the storefront layout.
  return <div className="min-h-screen bg-surface">{children}</div>
}

