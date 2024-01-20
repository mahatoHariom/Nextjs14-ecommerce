import { create, SetState } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types";
type ProductState = {
  products: Product[];
  addProducts: (products: Product[]) => void;
  removeProduct: (productId: string) => void;
  updateProduct: (productId: string, updatedProduct: Partial<Product>) => void;
};
export const useProductStore = create<ProductState>()(
  persist(
    (set: SetState<ProductState>) => ({
      products: [],
      addProducts: (products) => set((state) => addProducts(products)),
      removeProduct: (productId) =>
        set((state) => removeProduct(state.products, productId)),
      updateProduct: (productId, updatedProduct) =>
        set((state) =>
          updateProduct(state.products, productId, updatedProduct)
        ),
    }),
    {
      name: "product-storage",
    }
  )
);

export function addProducts(products: Product[]): { products: Product[] } {
  return { products: [...products] };
}

function removeProduct(
  state: Product[],
  productId: string
): { products: Product[] } {
  const updatedProducts = state.filter((product) => product.id !== productId);
  return { products: updatedProducts };
}

function updateProduct(
  state: Product[],
  productId: string,
  updatedProduct: Partial<Product>
): { products: Product[] } {
  const updatedProducts = state.map((product) =>
    product.id === productId ? { ...product, ...updatedProduct } : product
  );
  return { products: updatedProducts };
}
