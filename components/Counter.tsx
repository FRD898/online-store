import styled from "styled-components"
const StyledCounterContainer = styled.div`
    background: #FF8000;
    display: flex;
    color: white;
    width:180px;
    height:48px;
    justify-content: space-between;
    align-items: center;
    padding: 14px 18px;
`

const StyledButton = styled.button`
    font-size: 30px;
    margin: 0;
`

const StyledText = styled.span`
 font-weight: 600;
`

export default function Counter(){
    return(
        <StyledCounterContainer>
            <StyledButton>-</StyledButton>
            <StyledText>10</StyledText>
            <StyledButton>+</StyledButton>
        </StyledCounterContainer>
    )
}