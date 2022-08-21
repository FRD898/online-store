
import Image from "next/image";
import {  useQuery } from "@apollo/client";
import { GET_CART } from "../../../operations/queries/cart/getCart";
import { Update_Cart } from "../../../operations/mutations/update";
import Link from "next/link";
import { StyledResumeContainer,
StyledDateContainer,
StyledPriceContainer,
StyledPriceItem,
StyledText,
StyledButton} from "./CustomOrderStyles";

export default function OrderResume(){
    const {data,error, loading} = useQuery(GET_CART);
    return(
        <StyledResumeContainer>
            <StyledDateContainer>
                <Image alt="truck-icon" src="/truck-icon.svg" width={18} height={20}/>
                Buy now and get it by <b>{data.cart.date.toLocaleDateString()}</b>
            </StyledDateContainer>
            <StyledPriceContainer>
                <StyledPriceItem>
                    <StyledText >Products</StyledText>
                    <StyledText>$ {data.cart.productsValue.toFixed(2)}</StyledText>
                </StyledPriceItem>
                <StyledPriceItem highlighted={true}>
                    <StyledText bold={true}>Shipping Cost</StyledText>
                    <StyledText>$ {data.cart.shippingCost.toFixed(2)}</StyledText>
                </StyledPriceItem>
                <StyledPriceItem>
                    <StyledText>Taxes</StyledText>
                    <StyledText>$ {data.cart.taxes.toFixed(2)}</StyledText>
                </StyledPriceItem>
                <StyledPriceItem>
                    <StyledText bold={true}>Total</StyledText>
                    <StyledText color="red" bold={true}>$ {data.cart.total.toFixed(2)}</StyledText>
                </StyledPriceItem>
            </StyledPriceContainer>
            <Link href="/order-confirmation">
            <StyledButton empty={data.cart.total<50.0?true:false}
                onClick={(e)=>Update_Cart(null,0.0,0.0)}
                disabled={data.cart.total<50.0?true:false}>
                COMPLETE ORDER
            </StyledButton>
            </Link>
        </StyledResumeContainer>
    )
}