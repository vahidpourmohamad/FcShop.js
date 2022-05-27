import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "bulma/css/bulma-rtl.min.css";
import "./index.scss";

import reportWebVitals from "./reportWebVitals";
// import { Provider } from 'react-redux';
// import store from './Redux/Store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// * Seiten Komponenten
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
import {createUploadLink} from 'apollo-upload-client'
import { setContext } from "@apollo/client/link/context";
import { ErrorLink, onError, OnError } from "@apollo/client/link/error";
import { AuthProvider } from "./Context/AuthContext";
import LoginSeite from "./Seiten/Login/LoginSeite";
import Register from "./Seiten/Register/Register";
import AdminHeim from "./Seiten/Admin/Heim/AdminHeim";
import ProductAdd from "./Seiten/Admin/ProductAdd/ProductAdd";
import CategoryAdd from "./Seiten/Admin/CategoryAdd/CategoryAdd";

const root = ReactDOM.createRoot(document.getElementById("root"));

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.log(`Graphql Error ${message} ${location} ${path}`);
      alert(`Graphql Error ${message} ${location} ${path}`);
    });
  }
});

const authlink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || "",
    },
  };
});

const link = from([
  errorLink,
  //  new HttpLink({ uri: "http://127.0.0.1:10000" }),
  createUploadLink({ uri: "http://localhost:10000" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authlink.concat(link),
});

root.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Heim />} />
          <Route path="/UberSeite" element={<Uber />} />
          <Route path="/BloggenSeite" element={<Bloggen />} />
          <Route path="/KontaktSeite" element={<Kontakt />} />
          <Route path="/ProduktSeite/:id" element={<ProduktSichtSeite />} />
          <Route path="/login" element={<LoginSeite />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Admin/index" element={<AdminHeim />} />
          <Route path="/Admin/productadd" element={<ProductAdd />} />
          <Route path="/Admin/categoryadd" element={<CategoryAdd />} />

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
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
