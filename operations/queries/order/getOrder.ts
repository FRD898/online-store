import { gql } from "@apollo/client";
export const GET_LAST_ORDER = gql`
    query GetOrder{
        order @client{
            lastNumber
        }
    }
`
