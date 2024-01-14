export type User = {
  id: string;
  name?: string | null;
  email: string;
  password: string;
  providerId?: string | null;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
};

export type Seller = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  refreshToken?: string | null;
  role: UserRole;
  country: string;
  address: string;
  shopName: string;
  products: Product[];
  shopAddress: string;
  password: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  originalPrice: number;
  discountPrice: number;
  stock: number;
  seller: Seller;
  sellerId: string;
  images: Image[];
  soldOut?: number | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Image = {
  id: string;
  public_id: string;
  imgSrc: string;
  product?: Product | null;
  productId?: string | null;
};

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  SELLER = "seller",
}

export type updateSellerType = {
 
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  country: string;
  address: string;
  shopName: string;
  shopAddress: string;
};
