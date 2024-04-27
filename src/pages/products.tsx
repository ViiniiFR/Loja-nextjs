import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from '@/src/components/Header'
import { Container } from "reactstrap";
import ProductsList from "@/src/components/ProductsList";
import { fetchProducts, ProductType } from "@/src/services/products";
import { ReactNode } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts()
  return { props: { products } }
}
const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="ConheÃ§a todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
          <h1 className="my-5">
            Nossos Produtos
          </h1>
      </main>
    </>
  )
}

export default Products