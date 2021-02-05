import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import Editer from "./pages/editor";

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);

const GlobalStyle = createGlobalStyle`
    body * {
      box-sizing: border-box;
    }
  `;

const Main = (
  <>
    <GlobalStyle />
    <Editer />
  </>
);

render(Main, document.getElementById("root"));
