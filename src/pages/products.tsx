import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header'
import { Container } from 'reactstrap'
import ProductsList from '../src/components/ProductsList'
import { fetchProducts, ProductType } from '../src/services/products'

import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line to import the Reactstrap CSS

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts()
  return { props: { products } }
}

const Products: NextPage<{ products: ProductType[] }> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Nossos Produtos
          </h1>

          <ProductsList products={products} />
        </Container>
      </main>
    </>
  )
}

export default Products