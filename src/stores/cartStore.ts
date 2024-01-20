import { Product } from "@/types";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  quantity: number;
  product: Product;
};

type CartState = {
  cart: CartItem[];
  addToCart: (id: string, quantity: number, product: Product) => void;
  removeCartItem: (id: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (id, quantity, product) =>
        set((state) => addCartItem(state, id, quantity, product)),
      removeCartItem: (id) =>
        set((state) => removeCartItem(state, id)),
    }),
    {
      name: "cart-storage",
    }
  )
);

export function addCartItem(
  state: CartState,
  id: string,
  quantity: number,
  product: Product
): CartState {
  const existingItemIndex = state.cart.findIndex((item) => item.id === id);
  if (existingItemIndex !== -1) {
    toast.error("Product already in cart");
    return state;
  }
  const newItem: CartItem = {
    id: id,
    quantity: quantity,
    product: product,
  };
  toast.success("Added to cart");
  return { ...state, cart: [...state.cart, newItem] };
}

export function removeCartItem(
  state: CartState,
  id: string
): CartState {
  const updatedCart = state.cart.filter((item) => item.id !== id);
  return { ...state, cart: updatedCart };
}
