import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { Container } from "reactstrap";
import Header from "../../src/components/Header";
import ProductDetails from "../../src/components/ProductDetails";
import { fetchProduct, ProductType } from "../../src/services/products";

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id

  if (typeof id === 'string') {
    const product = await fetchProduct(id)

    return { props: { product }, revalidate: 10  }
  }

  return { redirect: { destination: '/products', permanent: false } }
}

const fetchProducts = async () => {
  const response = await fetch('NEXT_PUBLIC_APIURL');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.text();

  try {
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao analisar JSON:', error);
    throw new Error('A resposta da API não é um JSON válido');
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts()

  const paths = products.map((product: ProductType) => {
    return { params: { id: product.id.toString() } }
  })

  return { paths, fallback: false }
}

const Product: NextPage = (props: {
  children?: ReactNode
  product?: ProductType
}) => {
  return (
    <div>
      <Head>
        <title>{props.product!.name}</title>
        <meta name="description" content={props.product!.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container className="mt-5">
        <ProductDetails product={props.product!} />
      </Container>
    </div>
  )
}

export default Product