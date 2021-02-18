import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
  <BrowserRouter>
    <>
      <GlobalStyle />
      <Route exact path="/editor" component={Editer} />
      <Route exact path="/history">
        <h1>history</h1>
      </Route>
      <Redirect to="/editor" path="*" />
    </>
  </BrowserRouter>
);

render(Main, document.getElementById("root"));
