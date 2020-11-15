import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "IBMPlex-R";
    src: url(${require("../assets/fonts/IBMPlexSans-Regular.ttf")}) format("truetype");
  }
  @font-face {
    font-family: "IBMPlex-B";
    src: url(${require("../assets/fonts/IBMPlexSans-Bold.ttf")}) format("truetype");
  }

  p{
    font-family : "IBMPlex-R";
  }
  input{
    font-family : "IBMPlex-R";
  }
  h1,h2,h3,h4,h5,h6{
    font-family : "IBMPlex-B";
  }
  button{
    font-family : "IBMPlex-B";
  }
  html {
    -webkit-text-size-adjust: none
}

  * { 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
  }
`;
