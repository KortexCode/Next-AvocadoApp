import React from 'react';
import { Card } from 'semantic-ui-react';
import Link from 'next/link';
import Image from 'next/image';

type ProductListProps = {
  products: TProduct[];
};

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link legacyBehavior key={id} href={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={
          <Image src={image} alt="avocado image" width="333" height="333" />
        }
        meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
      />
    </Link>
  ));

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Card.Group itemsPerRow={2} stackable>
      {mapProductsToCards(products)}
    </Card.Group>
  );
};

export default ProductList;
