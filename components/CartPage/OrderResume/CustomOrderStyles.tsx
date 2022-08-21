import styled from "styled-components";
export const StyledResumeContainer = styled.div`display: flex;
justify-content: center;
align-items: center;
width: 360px;
flex-direction: column;
padding: 20px;
`
export const StyledDateContainer = styled.div`
text-align: center;
height: 30px;
line-height: 30px;
`
export const StyledPriceContainer = styled.ul`
    width: 360px;
    heigh: 160px;
    background: white;
    list-style-type: none;
`
export const StyledPriceItem = styled.li<{highlighted?:boolean}>`
    display:flex;
    justify-content: space-between;
    background: ${p=>(p.highlighted? "#FFE200" : "white")};
`

export const StyledButton = styled.button<{empty:boolean}>`
    background: ${p=>(p.empty? "#F7F7F7" : "#FF8000")};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    color: ${p=>(p.empty? "#C1C1C1" : "white")}; ;
    width: 360px;
    height: 48px;
`

export const StyledText = styled.span<{bold?:boolean, color?:string}>`
text-align: center;
font-weight: ${p=>(p.bold? 600: 400)};
color: ${p=>(p.color?p.color:"#333333")};
`

