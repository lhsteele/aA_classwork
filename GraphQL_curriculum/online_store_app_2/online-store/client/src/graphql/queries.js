import gql from 'graphql-tag'

export const FETCH_PRODUCTS = gql`
  {
    products {
      id
      name
      description
    }
  }
`;

export const FETCH_PRODUCT = gql`
  query FindProduct($id: ID!) {
    product(id: $id) {
     id
     name 
     description
     weight 
    }
  }
  
`

export const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
`;

export const FETCH_CART_ITEMS = gql`
  query FetchCartItems {
    cart @client {
      id 
    }
  }
`