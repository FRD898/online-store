import styled from "styled-components";
export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 64px 358px;

`

export const StyledText = styled.span<{size?:number, weight?: number, color?: string, pointer?: boolean}>`
font-size: ${p => p.size}px;
font-weight: ${p => p.weight};
color: ${p => p.color};
margin-top: 16px;
&:hover{
  cursor:${p=>p.pointer?"pointer":"auto"}
}
`