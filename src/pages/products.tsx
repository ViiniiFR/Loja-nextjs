// pages/products.tsx

import { NextPage } from "next";
import Head from "next/head";
import Header from '@/src/components/Header'

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="ConheÃ§a todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <h1>
        Nossos Produtos
      </h1>
    </>
  )
}

export default Products