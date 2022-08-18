import styled from 'styled-components';
const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    max-width: 800px;
    margin-top: 3rem;
`
const StyledInfoContainer = styled.div`

`

export default function Cards() {
    return (
        <StyledContainer>
            <img></img>
            <StyledInfoContainer>
                <span>Yogurt Laive</span>
                <span>Price</span>
            </StyledInfoContainer>
            <button>
                +
            </button>
        </StyledContainer>
        )
}