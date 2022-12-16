import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsDetail = () => {
  const params = useParams();

  console.log(params);
  return <div>하기싫어</div>;
};

export default ProductsDetail;
