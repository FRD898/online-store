
import styled from "styled-components";
import { Product } from "../utils/onlineStoreTypes";
import Card from "./Card";
const StyledListContainer = styled.div`
height: 480px;
  width: 360px;
  overflow-y: scroll;
overflow-x: hidden;

`
interface Props {
    products:Product[],
}
export default function ProductList(props:Props){
    return(
        <StyledListContainer>
            {
                props.products.map((p)=>{
                    return(
                        <Card key={p.id} product={p}></Card>
                    )
                }
                )
            }
      </StyledListContainer>
    )
}