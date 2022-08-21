import styled from 'styled-components';
import Image from "next/image";
import {EmptyProduct, Product}  from "../../../../utils/onlineStoreTypes";
import { useQuery } from '@apollo/client';
import { GET_CART } from '../../../../operations/queries/cart/getCart';
import { Update_Cart } from '../../../../operations/mutations/update';

const StyledCardContainer = styled.div`
    padding: 1.5rem;
    border-bottom: 1px solid  #DDDDDD;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 360px;
    height: 106px;
    background: #FFFFFF;
    &:hover,
    :focus,
    :active {
        border-color: #0070f3;
    }
    margin: 10px 0px;
`
const StyledImg = styled(Image)`
    width: 80;
    height: 74;
`

const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StyledPrice = styled.span`
color: red;
font-weight: 600;
`

const StyledText = styled.span`
    height: 100%;
    white-space: nowrap; 
    width: 100px; 
    overflow: hidden;
    text-overflow: ellipsis; 
`

const StyledButtonContainer = styled.div`
    display:flex;
    flex-direction:column;
    height: 120px;
`

const StyledButton = styled.button`
    border-radius: 50%;
    height: 48px;
    width: 48px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    padding: 0;
`
const StyledDeleteButton = styled.button`
    height: 18px;
    width: 48px;
    font-size: 10px;
    background: white;
    color: #333333;
    margin-top: 5px;
`


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