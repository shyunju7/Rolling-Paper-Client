import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

${reset}

@font-face {
  font-family: "HSYuji";
  src: url("../src/font/HSYuji.ttf") format("woff"),
    url("../src/font/HSYuji.ttf") format("woff2");
}

@font-face {
  font-family: "nanum";
  src: url("../src/font/나눔손글씨\ 왼손잡이도\ 예뻐.ttf") format("woff"),
    url("../src/font/나눔손글씨\ 왼손잡이도\ 예뻐.ttf") format("woff2");
}

@font-face {
  font-family: "Uiyeun";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105@1.1/Uiyeun.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

a {
        text-decoration : none;
        color : inherit;
  }
body {
        font-family : apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell , 'Helvetica Neue', sans-serif;
}
`;

export default GlobalStyles;
