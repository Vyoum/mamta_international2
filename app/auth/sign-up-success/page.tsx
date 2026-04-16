import Link from "next/link"

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen bg-surface-container-lowest flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="font-bodoni text-3xl tracking-normal text-on-surface uppercase">
              MAMTA
            </span>
            <span className="block font-sans text-[9px] tracking-[0.22em] text-on-surface uppercase mt-1 font-medium italic">
              International
            </span>
          </Link>
        </div>

        <div className="bg-white p-8 border border-outline-variant text-center">
          <div className="w-16 h-16 mx-auto mb-6 border-2 border-on-surface rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              <path d="M18 15.28c.35-.14.74-.22 1.15-.22h.01a2.85 2.85 0 0 1 0 5.7h-.01c-.41 0-.8-.08-1.15-.22"/>
              <path d="M18 21v-5.72"/>
            </svg>
          </div>
          
          <h1 className="text-xl font-medium text-on-surface uppercase tracking-wide mb-4">
            Check Your Email
          </h1>
          
          <p className="text-on-surface/70 text-sm leading-relaxed mb-6">
            We&apos;ve sent you a confirmation email. Please click the link in the email to verify your account and complete your registration.
          </p>

          <Link 
            href="/auth/login" 
            className="inline-block border border-on-surface py-3 px-8 text-on-surface text-sm uppercase tracking-wide hover:bg-on-surface hover:text-surface-container-lowest transition-colors"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}
