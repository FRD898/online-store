import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  button {
    background: #FF8000;
    border: none;
    color: white;
    &:hover{
      cursor:pointer;
    }
  }
  html {
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    background: #F7F7F9;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

h1 {
    color: yellow !important; // the important is just to show that the style works!
}


  // anything else you would like to include
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;