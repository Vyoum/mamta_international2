"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo:
          process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ??
          `${window.location.origin}/auth/callback`,
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push("/auth/sign-up-success")
    }
  }

  const handleGoogleSignUp = async () => {
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
    <div className="min-h-screen relative flex items-center justify-center px-4 py-12">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Fashion Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block">
            <span className="font-bodoni text-4xl tracking-normal text-white uppercase drop-shadow-lg">
              MAMTA
            </span>
            <span className="block font-sans text-[10px] tracking-[0.25em] text-white/90 uppercase mt-1.5 font-medium italic">
              International
            </span>
          </Link>
        </div>

        {/* Glass Effect Container */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl">
          <h1 className="text-2xl font-light text-white uppercase tracking-[0.15em] text-center mb-8">
            Create Account
          </h1>

          {error && (
            <div className="mb-6 p-4 backdrop-blur-sm bg-red-500/20 border border-red-400/30 rounded-lg text-red-100 text-sm text-center">
              {error}
            </div>
          )}

          {/* Google Sign Up */}
          <button
            onClick={handleGoogleSignUp}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 backdrop-blur-sm bg-white/10 border border-white/30 rounded-lg py-3.5 px-4 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mb-6 group"
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
            <span className="text-sm uppercase tracking-wider font-medium">Continue with Google</span>
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-4 text-white/60 tracking-wider bg-transparent">Or</span>
            </div>
          </div>

          {/* Email/Password Sign Up */}
          <form onSubmit={handleEmailSignUp} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-xs uppercase tracking-wider text-white/70 mb-2.5 font-medium">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full backdrop-blur-sm bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs uppercase tracking-wider text-white/70 mb-2.5 font-medium">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full backdrop-blur-sm bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-white/70 mb-2.5 font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full backdrop-blur-sm bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs uppercase tracking-wider text-white/70 mb-2.5 font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full backdrop-blur-sm bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300"
                placeholder="Min 6 characters"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-on-surface py-3.5 px-4 rounded-lg text-sm uppercase tracking-wider font-semibold hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2 shadow-lg"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-white/70 mt-8">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-white font-medium hover:underline transition-all">
              Sign In
            </Link>
          </p>
        </div>

        {/* Bottom decorative text */}
        <p className="text-center text-white/40 text-xs tracking-widest uppercase mt-8">
          Join the Exclusive Experience
        </p>
      </div>
    </div>
  )
}
