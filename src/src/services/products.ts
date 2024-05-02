import fetch from 'node-fetch';

export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  inStock: number
}

const API_BASE_URL = process.env.NEXT_PUBLIC_APIURL || 'http://localhost:3000';

export async function fetchProducts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`);
  const products = await response.json();
  return products;
}

export async function fetchProduct(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`);
  const product = await response.json();
  return product;
}