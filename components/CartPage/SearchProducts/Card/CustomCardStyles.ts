import styled from 'styled-components';
import Image from "next/image";
export const StyledCardContainer = styled.div`
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
export const StyledImg = styled(Image)`
    width: 80;
    height: 74;
`

export const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const StyledPrice = styled.span`
    color: red;
    font-weight: 600;
`

export const StyledText = styled.span`
    height: 100%;
    white-space: nowrap;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const StyledButtonContainer = styled.div`
    display:flex;
    flex-direction:column;
    height: 120px;
`

export const StyledButton = styled.button`
    border-radius: 50%;
    height: 48px;
    width: 48px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    padding: 0;
`
export const StyledDeleteButton = styled.button`
    height: 18px;
    width: 48px;
    font-size: 10px;
    background: white;
    color: #333333;
    margin-top: 5px;
`