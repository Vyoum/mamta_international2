export type CartItem = {
  productId: string
  slug: string
  name: string
  price: number
  image?: string
  quantity: number
}

const STORAGE_KEY = "mi_cart"

function isBrowser() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined"
}

export function readCart(): CartItem[] {
  if (!isBrowser()) return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed as CartItem[]
  } catch {
    return []
  }
}

export function writeCart(items: CartItem[]) {
  if (!isBrowser()) return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export function addToCart(nextItem: Omit<CartItem, "quantity">, quantity: number = 1) {
  const current = readCart()
  const existingIdx = current.findIndex((i) => i.productId === nextItem.productId)
  if (existingIdx >= 0) {
    const updated = [...current]
    updated[existingIdx] = {
      ...updated[existingIdx],
      quantity: (updated[existingIdx].quantity || 0) + quantity,
    }
    writeCart(updated)
    return updated
  }

  const updated = [...current, { ...nextItem, quantity }]
  writeCart(updated)
  return updated
}

export function updateQuantity(productId: string, quantity: number) {
  const current = readCart()
  const updated = current
    .map((i) => (i.productId === productId ? { ...i, quantity } : i))
    .filter((i) => i.quantity > 0)
  writeCart(updated)
  return updated
}

export function removeFromCart(productId: string) {
  const current = readCart()
  const updated = current.filter((i) => i.productId !== productId)
  writeCart(updated)
  return updated
}

export function clearCart() {
  writeCart([])
}

