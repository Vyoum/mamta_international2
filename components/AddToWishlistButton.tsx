"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function AddToWishlistButton({ productId }: { productId: string }) {
  const [loading, setLoading] = useState(false)
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkWishlistStatus = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        setIsLoggedIn(false)
        return
      }
      
      setIsLoggedIn(true)
      
      const { data } = await supabase
        .from("wishlist")
        .select("id")
        .eq("user_id", user.id)
        .eq("product_id", productId)
        .single()
      
      setIsInWishlist(!!data)
    }
    
    checkWishlistStatus()
  }, [productId, supabase])

  const handleToggle = async () => {
    if (!isLoggedIn) {
      router.push("/auth/login")
      return
    }

    setLoading(true)
    
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push("/auth/login")
      return
    }

    if (isInWishlist) {
      await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", user.id)
        .eq("product_id", productId)
      
      setIsInWishlist(false)
    } else {
      await supabase
        .from("wishlist")
        .insert({
          user_id: user.id,
          product_id: productId,
        })
      
      setIsInWishlist(true)
    }
    
    setLoading(false)
    router.refresh()
  }

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className="w-10 h-10 border border-on-surface/20 hover:border-on-surface flex items-center justify-center text-on-surface transition-colors disabled:opacity-50"
      aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill={isInWishlist ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    </button>
  )
}
