import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { FETCH_PRODUCT } from '../../graphql/queries'
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart'

const ProductDetail = (props) => {
  return (
    <Query query={FETCH_PRODUCT} variables={{id: props.match.params.productId}}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        // console.log(data)
        return (
         <div>
           <div>{data.product.name}</div >
           <div>{data.product.description}</div >
           <div>{data.product.weight}</div >
           <AddToCart id={data.product.id} />
         </div>
        );
      }}
    </Query>
  );
};

export default ProductDetail;