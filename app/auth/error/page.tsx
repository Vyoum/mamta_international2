import Link from "next/link"

export default function AuthErrorPage() {
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
          <div className="w-16 h-16 mx-auto mb-6 border-2 border-red-500 rounded-full flex items-center justify-center text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" x2="9" y1="9" y2="15"/>
              <line x1="9" x2="15" y1="9" y2="15"/>
            </svg>
          </div>
          
          <h1 className="text-xl font-medium text-on-surface uppercase tracking-wide mb-4">
            Authentication Error
          </h1>
          
          <p className="text-on-surface/70 text-sm leading-relaxed mb-6">
            Something went wrong during authentication. Please try again or contact support if the problem persists.
          </p>

          <div className="flex flex-col gap-3">
            <Link 
              href="/auth/login" 
              className="inline-block bg-on-surface text-surface-container-lowest py-3 px-8 text-sm uppercase tracking-wide hover:bg-on-surface/90 transition-colors"
            >
              Try Again
            </Link>
            <Link 
              href="/" 
              className="inline-block border border-on-surface py-3 px-8 text-on-surface text-sm uppercase tracking-wide hover:bg-on-surface hover:text-surface-container-lowest transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
