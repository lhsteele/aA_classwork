import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {FETCH_PRODUCTS} from '../../graphql/queries'
import { Link } from 'react-router-dom';

const ProductIndex = () => {
  return (
    <Query query={FETCH_PRODUCTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <ul>
            {data.products.map(product => (
              <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <li>{product.name}</li>
                </Link>
                <li>{product.description}</li>
              </div>
            ))}
          </ul>
        );
      }}
    </Query>
  );
};

export default ProductIndex;