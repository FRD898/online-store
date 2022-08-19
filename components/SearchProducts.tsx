//https://medium.com/swlh/typing-next-js-components-using-typescript-2f1d0dc30c4c
//https://fakestoreapi.com/docs
//https://medium.com/geekculture/headless-woocommerce-next-js-create-a-cart-8a3e49b90076

import styled from "styled-components";
import Card from "./Card";
import { Product } from "../utils/onlineStoreTypes";
import EmptyList from "./EmptyList";

const StyledSearchInput = styled.input`
  width: 360px;
  height: 48px;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  background: #FFFFFF;
`

const StyledSearchContainer = styled.div`

`
const StyledListContainer = styled.div`


`
interface Props {
  products:Product[],
}

export default function SearchProducts(props:Props){
  return(
    <StyledSearchContainer>
      <StyledSearchInput type='text'>
      </StyledSearchInput>
      <StyledListContainer>
        <Card product={props.products[0]}></Card>
        <Card product={props.products[1]}></Card>
        <Card product={props.products[1]}></Card>
      </StyledListContainer>
      <EmptyList/>
    </StyledSearchContainer>
  )
}
/*const lineItem = {
  product_id: product.id,
  quantity: 1,
  name: product.name,
  price: product.regular_price,
};*/