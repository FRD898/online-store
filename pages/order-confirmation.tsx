import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import Image from 'next/image'
import Link from 'next/link'


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 64px 358px;

`

const StyledText = styled.span<{size?:number, weight?: number, color?: string}>`
    font-size: ${p => p.size}px;
    font-weight: ${p => p.weight};
    color: ${p => p.color};
    margin-top: 16px;
`

const Code:string = "P0001";

const Confirmation = () => {
    return (
      <BasicLayout>
        <StyledContainer>
            <StyledText size={28} weight={600}>Thank you</StyledText>
            <StyledText>Your order <b>{Code}</b> has been registered</StyledText>
            <Link href="/">
                <StyledText color="#0500FF"> Continue shopping</StyledText>
            </Link>
            <Image src="/success-icon.svg" alt="success-icon" width="308" height="288"/>
        </StyledContainer>
      </BasicLayout>
    );
  };
  
  export default Confirmation;