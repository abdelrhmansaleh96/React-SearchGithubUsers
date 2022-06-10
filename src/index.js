import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// DOMAIN = dev-n100ec5h.us.auth0.com
//CLIENT ID = 8AiPpk6Wwd0inQ2I0HoOG4Ntyb2wGiWL

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-n100ec5h.us.auth0.com"
      clientId="8AiPpk6Wwd0inQ2I0HoOG4Ntyb2wGiWL"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
