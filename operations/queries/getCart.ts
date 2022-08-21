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
export const GET_LAST_ORDER = gql`
    query GetOrder{
        order @client{
            lastNumber
        }
    }
`
