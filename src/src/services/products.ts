import fetch from 'node-fetch';

export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  inStock: number
}

export async function fetchProducts() {
  const baseUrl = process.env.NEXT_PUBLIC_APIURL; // Certifique-se de que BASE_URL está definido corretamente
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`);
  const products = await response.json();
  return products;
}

export async function fetchProduct(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`);
  const product = await response.json();
  return product;
}