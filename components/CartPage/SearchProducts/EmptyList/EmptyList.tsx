import Image from 'next/image';
import { StyledEmptyContainer,
        StyledImportantText,
        StyledText} from './CustomEmptyStyles';

export default function EmptyList(){
    return (
        <StyledEmptyContainer>
            <Image alt='empty cart icon' src="/cart-icon.svg" width={53} height={45}/>
            <StyledImportantText>Your cart is empty</StyledImportantText>
            <StyledText>Seems like you haven&apos;t chosen what to buy...</StyledText>
        </StyledEmptyContainer>
    )
}