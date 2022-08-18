//https://medium.com/swlh/typing-next-js-components-using-typescript-2f1d0dc30c4c
//https://fakestoreapi.com/docs
//https://medium.com/geekculture/headless-woocommerce-next-js-create-a-cart-8a3e49b90076

import styled from "styled-components";
import Card from "./Card";
import { Product } from "../utils/onlineStoreTypes";

const StyledSearchInput = styled.input`

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
    </StyledSearchContainer>
  )
}
/*const lineItem = {
  product_id: product.id,
  quantity: 1,
  name: product.name,
  price: product.regular_price,
};*/