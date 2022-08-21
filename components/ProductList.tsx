
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { cartVar, Product } from "../utils/onlineStoreTypes";
import Card from "./Card";
import Counter from "./Counter";
const StyledListContainer = styled.div`
height: 480px;
width: 360px;
overflow-y: auto;
overflow-x: hidden;
display: flex;
flex-direction: column;
align-items:end;
`

export const GET_CART = gql`
  query GetCart{
    cart @client{
      date
      productId
      numberOfProducts
      productsValue
      shippingCost
      taxes
      total
    }
  }
`
interface Props {
    products:Product[],
    setSelectedItem:Function,
    selectedItem:Product,
}
export default function ProductList(props:Props){
    const {data, error, loading} = useQuery(GET_CART);

    return(
        <StyledListContainer>
            {
                data.cart.productId!=null?
                props.products.map((p)=>{
                    if(p.id ==  data.cart.productId)
                        return(
                            <Card
                            key={p.id}
                            product={p}
                            />
                        )
                }):
                props.products.map((p)=>{
                    return(
                        <Card
                        key={p.id}
                        product={p}
                        />
                    )
                    })
            }
            {
                data.cart.productId!==null?<Counter/>:null
            }
        </StyledListContainer>
    )
}