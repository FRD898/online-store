import styled from 'styled-components';

const StyledCardContainer = styled.div`
    padding: 1.5rem;
    color: inherit;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 10px;
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
`
const StyledImg = styled.img`
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

const StyledButton = styled.button`
    border-radius: 50%;
    height: 48px;
    width: 48px;
    font-size: 38px;
`

export default function Card() {
    return (
        <StyledCardContainer>
            <StyledImg src='https://plazavea.vteximg.com.br/arquivos/ids/442423-1000-1000/20202120.jpg?v=637388408426600000'/>
            <StyledInfoContainer>
                <span>Yogurt Laive</span>
                <StyledPrice>Price</StyledPrice>
            </StyledInfoContainer>
            <StyledButton>
                +
            </StyledButton>
        </StyledCardContainer>
        )
}