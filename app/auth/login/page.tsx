"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push("/account")
      router.refresh()
    }
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo:
          process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ??
          `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&q=80&w=2400"
          alt="Luxury fashion background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(255,255,255,0.14),transparent_55%),radial-gradient(900px_circle_at_80%_70%,rgba(255,255,255,0.10),transparent_55%)]" />
      </div>

      <div className="relative z-10 min-h-screen">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
          {/* Top brand row */}
          <div className="flex items-center justify-between">
            <Link href="/" className="group inline-flex items-baseline gap-3">
              <span className="font-bodoni text-2xl sm:text-3xl tracking-normal text-white uppercase drop-shadow">
                MAMTA
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.28em] text-white/80 uppercase font-medium group-hover:text-white transition-colors">
                International
              </span>
            </Link>
            <Link
              href="/auth/sign-up"
              className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors tracking-wide"
            >
              Create account
            </Link>
          </div>

          {/* Main grid */}
          <div className="mt-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left editorial panel (desktop) */}
            <div className="hidden lg:flex flex-col justify-between rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-10 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-white/70">
                  Members Access
                </p>
                <h1 className="mt-4 text-4xl leading-[1.05] text-white font-light tracking-[-0.02em]">
                  An atelier experience,
                  <br />
                  refined for the web.
                </h1>
                <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-md">
                  Sign in to view your wishlist, track orders, and manage your profile.
                  Your session is secured via Supabase.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-white/60">
                    Wishlist
                  </p>
                  <p className="mt-2 text-sm text-white/90">Save favorites</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-white/60">
                    Orders
                  </p>
                  <p className="mt-2 text-sm text-white/90">Track status</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-white/60">
                    Profile
                  </p>
                  <p className="mt-2 text-sm text-white/90">Manage details</p>
                </div>
              </div>
            </div>

            {/* Right login card */}
            <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.45)] overflow-hidden">
              <div className="p-7 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-white/70">
                      Sign in
                    </p>
                    <h2 className="mt-3 text-2xl sm:text-3xl text-white font-light tracking-[-0.02em]">
                      Welcome back
                    </h2>
                    <p className="mt-2 text-sm text-white/70">
                      Continue to your account, wishlist, and orders.
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[11px] text-white/80 tracking-wide">
                      Secure login
                    </span>
                  </div>
                </div>

                {error && (
                  <div className="mt-6 rounded-xl border border-red-400/30 bg-red-500/15 px-4 py-3 text-red-100 text-sm">
                    {error}
                  </div>
                )}

                <div className="mt-7">
                  <button
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white hover:bg-white/15 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-sm font-medium tracking-wide">
                      Continue with Google
                    </span>
                  </button>

                  <div className="my-7 flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/15" />
                    <span className="text-[11px] tracking-[0.28em] uppercase text-white/55">
                      or
                    </span>
                    <div className="h-px flex-1 bg-white/15" />
                  </div>

                  <form onSubmit={handleEmailLogin} className="space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] uppercase tracking-[0.24em] text-white/70 mb-2 font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                        className="w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-white/35 focus:bg-black/30 transition-colors"
                        placeholder="name@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-[11px] uppercase tracking-[0.24em] text-white/70 mb-2 font-medium"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                        className="w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-white/35 focus:bg-black/30 transition-colors"
                        placeholder="Enter your password"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <p className="text-xs text-white/55">
                        By continuing, you agree to our terms.
                      </p>
                      <Link
                        href="/auth/forgot-password"
                        className="text-xs text-white/70 hover:text-white transition-colors tracking-wide"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-white text-black px-4 py-3.5 text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                    >
                      {loading ? "Signing in..." : "Sign In"}
                    </button>
                  </form>

                  <p className="mt-7 text-sm text-white/70">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/auth/sign-up"
                      className="text-white hover:underline underline-offset-4"
                    >
                      Create one
                    </Link>
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 bg-black/20 px-7 sm:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <p className="text-[11px] tracking-[0.26em] uppercase text-white/50">
                  Mamta International
                </p>
                <p className="text-xs text-white/50">
                  © {new Date().getFullYear()} All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
