import { gql } from "@apollo/client";
export const GET_CART = gql`
    query GetCart{
        cart @client{
        date
        productId
        price
        numberOfProducts
        productsValue
        shippingCost
        taxes
        total
        }
    }
`
