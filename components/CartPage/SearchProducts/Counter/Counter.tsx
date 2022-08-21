import { useQuery } from '@apollo/client';
import { GET_CART } from '../../../../operations/queries/cart/getCart';
import { Update_Cart } from '../../../../operations/mutations/update';
import { StyledButton,
StyledCounterContainer,
StyledText} from './CustomCounterStyles';

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