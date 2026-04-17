"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { addToCart } from "@/lib/cart"

type Props = {
  productId: string
  slug: string
  name: string
  price: number
  image?: string
  className?: string
}

export default function AddToCartButton({
  productId,
  slug,
  name,
  price,
  image,
  className,
}: Props) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleAdd = () => {
    setLoading(true)
    addToCart({ productId, slug, name, price, image }, 1)
    router.push("/cart")
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      disabled={loading}
      className={
        className ??
        "w-full border border-on-surface/20 hover:border-on-surface bg-transparent text-on-surface py-2.5 text-xs uppercase tracking-wide transition-colors disabled:opacity-60"
      }
      aria-label="Add to cart"
    >
      {loading ? "Adding..." : "Add to cart"}
    </button>
  )
}

