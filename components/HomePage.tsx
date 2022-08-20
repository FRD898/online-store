import styled from "styled-components";
import { Product } from "../utils/onlineStoreTypes";
import OrderResume from "./OrderResume";
import SearchProducts from "./SearchProducts";
const StyledHomePageContainer = styled.div`
display: flex;
width: 100vw;
justify-content: space-evenly;
padding-top: 100px;
`


interface Props {
    data:Product[],
  }
export default function HomePage(props:Props){
    return(
        <StyledHomePageContainer>
          <SearchProducts products ={props.data}></SearchProducts>
          <OrderResume></OrderResume>
        </StyledHomePageContainer>
    )
    
}