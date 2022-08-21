import {Product}  from "../../../../utils/onlineStoreTypes";
import { useQuery } from '@apollo/client';
import { GET_CART } from '../../../../operations/queries/cart/getCart';
import { Update_Cart } from '../../../../operations/mutations/update';
import { StyledCardContainer,
    StyledImg,
    StyledButton,
    StyledButtonContainer,
    StyledDeleteButton,
    StyledInfoContainer,
    StyledPrice,
    StyledText} from "./CustomCardStyles";

interface Props {
    product:Product,
  }


export default function Card(props:Props) {
    const {data, error, loading} = useQuery(GET_CART);
    return (
        <StyledCardContainer>
            <StyledImg
            src={props.product.image}
            alt={"image"}
            width="80px"
            height="74px"
            />
            <StyledInfoContainer>
                <StyledText title={props.product.title}>{props.product.title}</StyledText>
                <StyledPrice>{props.product.price}</StyledPrice>
            </StyledInfoContainer>
            <StyledButtonContainer>
                <StyledButton onClick={()=>{Update_Cart(props.product.id,props.product.price,1)}}>
                    {props.product.id === data.cart.productId?data.cart.numberOfProducts:"+"}
                </StyledButton>
                {
                    data.cart.productId!==null?
                    <StyledDeleteButton onClick={()=>{Update_Cart(null,0.0,0.0)}}>
                    delete
                    </StyledDeleteButton>:
                    null
                }
            </StyledButtonContainer>
        </StyledCardContainer>
        )
}