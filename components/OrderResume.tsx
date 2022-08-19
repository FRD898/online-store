import styled from "styled-components";
import Image from "next/image";

const StyledResumeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 360px;
flex-direction: column;
padding: 20px;
`
const StyledDateContainer = styled.div`
text-align: center;
height: 30px;
line-height: 30px;
`
const StyledPriceContainer = styled.ul`
    width: 360px;
    heigh: 160px;
    background: white;
    list-style-type: none;
`
const StyledPriceItem = styled.li<{highlighted?:boolean}>`
    display:flex;
    justify-content: space-between;
    background: ${p=>(p.highlighted? "#FFE200" : "white")};
`

const StyledButton = styled.button<{empty:boolean}>`
    background: ${p=>(p.empty? "#F7F7F7" : "#FF8000")};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    color: #C1C1C1;
    width: 360px;
    height: 48px;
`

const StyledText = styled.span<{bold?:boolean, color?:string}>`
text-align: center;
font-weight: ${p=>(p.bold? 600: 400)};
color: ${p=>(p.color?p.color:"#333333")};
`

export default function OrderResume(){
    return(
        <StyledResumeContainer>
            <StyledDateContainer>
                <Image src="/truck-icon.svg" width={18} height={20}/>
                Buy now and get it by 05/24/19
            </StyledDateContainer>
            <StyledPriceContainer>
                <StyledPriceItem>
                    <StyledText >Products</StyledText>
                    <StyledText>$ 0.00</StyledText>
                </StyledPriceItem>
                <StyledPriceItem highlighted={true}>
                    <StyledText bold={true}>Shipping Cost</StyledText>
                    <StyledText>$ 0.00</StyledText>
                </StyledPriceItem>
                <StyledPriceItem>
                    <StyledText>Taxes</StyledText>
                    <StyledText>$ 0.00</StyledText>
                </StyledPriceItem>
                <StyledPriceItem>
                    <StyledText bold={true}>Total</StyledText>
                    <StyledText color="red" bold={true}>$ 0.00</StyledText>
                </StyledPriceItem>
            </StyledPriceContainer>
            <StyledButton empty={true}>
                COMPLETE ORDER
            </StyledButton>
        </StyledResumeContainer>
    )
}