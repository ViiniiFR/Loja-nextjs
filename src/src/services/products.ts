import fetch from 'node-fetch';

export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  inStock: number
}

export const fetchProducts = async () => {
  const products: ProductType[] = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`).then(res => res.json() as unknown as ProductType[])
  return products
}

export const fetchProduct = async (id: string | number) => {
  const product: ProductType = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`).then(res => res.json() as unknown as ProductType)
  return product
}