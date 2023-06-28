import React from 'react';
import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo');
  const { data: productList }: TAPIAvoResponse = await response.json();
  console.log(productList);
  const paths = productList.map(({ id }) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: false, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const response = await fetch(
    `https://next-avocado-app.vercel.app/api/avo/${id}`
  );
  const data: TProduct = await response.json();
  console.log(data);
  debugger;
  return {
    props: {
      product: data,
    },
  };
};

const ProductPage = ({ product }: { product: TProduct }) => {
  console.log(product);
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductPage;
