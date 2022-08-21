import styled from "styled-components"
import { Product } from "../../../../utils/onlineStoreTypes";
import { useQuery } from '@apollo/client';
import { GET_CART } from '../../../../operations/queries/cart/getCart';
import { Update_Cart } from '../../../../operations/mutations/update';
const StyledCounterContainer = styled.div`
    background: #FF8000;
    display: flex;
    color: white;
    width:180px;
    height:48px;
    justify-content: space-between;
    align-items: center;
    padding: 14px 18px;
    margin-right: 20px;
`

const StyledButton = styled.button`
    font-size: 30px;
    margin: 0;
`

const StyledText = styled.span`
 font-weight: 600;
`


export default function Counter(){
    const {data, error, loading} = useQuery(GET_CART);
    const handleCounter = (type:string)=>{
        if(type=="red")
            if(data.cart.numberOfProducts>1)
                Update_Cart(data.cart.productId, data.cart.price, data.cart.numberOfProducts - 1)
        if(type=="inc")
            if(data.cart.numberOfProducts<10)
                Update_Cart(data.cart.productId, data.cart.price, data.cart.numberOfProducts + 1)
        
    }
    if(loading)
        return  <p>loading</p>
    if(error)
        return <p>Error</p>
    return(
        <StyledCounterContainer>
            <StyledButton id="red" onClick={(e)=>handleCounter(e.currentTarget.id)}>-</StyledButton>
            <StyledText>{data.cart.numberOfProducts}</StyledText>
            <StyledButton id="inc" onClick={(e)=>handleCounter(e.currentTarget.id)}>+</StyledButton>
        </StyledCounterContainer>
    )
}