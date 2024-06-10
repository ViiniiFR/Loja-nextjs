export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  inStock: number
}

export const fetchProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const products: ProductType[] = await response.json()
  return products
}

export const fetchProduct = async (id: string | number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const product: ProductType = await response.json()
  return product
}