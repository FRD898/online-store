import styled from 'styled-components';
import Image from 'next/image';

const StyledEmptyContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:360px;
    height:480px;
`

const StyledImportantText = styled.span`
    font-weight: 600;
    font-size: 21px;
    line-height: 32px;
`
const StyledText = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 227px;
    text-align: center;
`
export default function EmptyList(){
    return (
        <StyledEmptyContainer>
            <Image src="/cart-icon.svg" width={53} height={45}/>
            <StyledImportantText>Your cart is empty</StyledImportantText>
            <StyledText>Seems like you haven't chosen what to buy...</StyledText>
        </StyledEmptyContainer>
    )
}