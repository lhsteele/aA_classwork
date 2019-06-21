import React from 'react'
import {Mutation, ApolloConsumer, Query} from 'react-apollo'
import {FETCH_CART_ITEMS} from '../../graphql/queries'


class AddToCart extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      emptyCart: false,
      changed: false
    }
  }
  // cache.data.delete(id)
  // filter out the id we want to delete
  // re-assign that array to the cache
  // return the cart again

  render() {

    return (
      <ApolloConsumer>
        {client => (
          <Query query={FETCH_CART_ITEMS}
            >
            {({ data, refetch }) => {
              console.log(data.cart)
              let inCart;
              data.cart.forEach(cartItem => {
                if (cartItem.id === this.props.id) {
                  inCart = true
                }
              })
              window.cart = data.cart
              if (inCart) {
                let cartItems = data.cart.filter(item => {
                  // console.log(item.id)
                  // console.log(this.props.id)
                  return item.id !== this.props.id
                })
                return (
                  <button onClick={() => {
                    console.log('click')
                    client.writeData({ data: { cart: cartItems, __typename: "addToCart" } })
                    this.setState({ changed: true })
                  }}>
                    Remove Item
                  </button>
                )
              } else {
                let cartItems = data.cart
                console.log(client)
                return (
                  <button onClick={() => {
                    cartItems.push({ id: this.props.id, __typename: "addToCart" })
            
                    console.log(cartItems)
                    client.writeData({ data: { data: { cart: cartItems, __typename: "addToCart"}}} )
                  }}>
                    Add Item
                  </button>
                )
              }
            }}
          </Query>
        )}
      </ApolloConsumer>
    )
  }
}

export default AddToCart;