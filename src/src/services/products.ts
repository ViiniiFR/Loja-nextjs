export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  inStock: number
}

export const fetchProducts = async () => {
  const products: ProductType[] = await fetch(`${process.env.NEXT_PUBLIC_APIURL}C:\Users\vinic\OneDrive\Documentos\Estudos Full Stack Javascript\MeuProjeto\black-nextjs\src\pages\api\products`).then(res => res.json())
  return products
}

export const fetchProduct = async (id: string | number) => {
  const product: ProductType = await fetch(`${process.env.NEXT_PUBLIC_APIURL}C:\Users\vinic\OneDrive\Documentos\Estudos Full Stack Javascript\MeuProjeto\black-nextjs\src\pages\api\products\[id].ts${id}`).then(res => res.json())
  return product
}
