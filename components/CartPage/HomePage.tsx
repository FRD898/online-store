
import { Product } from "../../utils/onlineStoreTypes";
import { StyledHomePageContainer } from "./CustomHomerStyles";
import OrderResume from "./OrderResume/OrderResume";
import SearchProducts from "./SearchProducts/SearchProducts";

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