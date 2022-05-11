import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
// import { Provider } from 'react-redux';
// import store from './Redux/Store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// * Seiten Komponenten
import Anmeldung from "./Seiten/Anmeldung/AnmeldungSeite.js";
import Heim from "./Seiten/Heim/HeimSeite";
import Bloggen from "./Seiten/Bloggen/BloggenSeite";
import Kontakt from "./Seiten/Kontakt/KontaktSeite";
import Uber from "./Seiten/Uber/UberSeite";
import ProduktSichtSeite from "./Seiten/ProduktSicht/ProduktSichtSeite";


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { ErrorLink, onError, OnError } from "@apollo/client/link/error";

const root = ReactDOM.createRoot(document.getElementById("root"));

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql Error ${message} ${location} ${path}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://127.0.0.1:10000" })]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Heim />} />
        <Route path="/UberSeite" element={<Uber />} />
        <Route path="/BloggenSeite" element={<Bloggen />} />
        <Route path="/KontaktSeite" element={<Kontakt />} />
        <Route path="/ProduktSeite" element={<ProduktSichtSeite />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Nichts drin , Kommen sie zurück , 404 Error</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
