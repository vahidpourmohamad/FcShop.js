import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "bulma/css/bulma-rtl.min.css";
import "./index.scss";

import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProduktSichtSeite from "./Seiten/ProduktSicht/ProduktSichtSeite";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import { ErrorLink, onError, OnError } from "@apollo/client/link/error";
import { AuthProvider } from "./Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (networkErrors) {
    networkErrors.map(({ message, location, path }) => {
      console.log(`Graphql Error ${message} ${location} ${path}`);
      alert(`Graphql Error ${message} ${location} ${path}`);
    });
  }
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
  createUploadLink({ uri: "http://localhost:10000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authlink.concat(link),
});

const Heim = lazy(() => import("./Seiten/Heim/HeimSeite"));

const Bloggen = lazy(() => import("./Seiten/Bloggen/BloggenSeite"));

const Kontakt = lazy(() => import("./Seiten/Kontakt/KontaktSeite"));

const Uber = lazy(() => import("./Seiten/Uber/UberSeite"));

const LoginSeite = lazy(() => import("./Seiten/Login/LoginSeite"));

const Register = lazy(() => import("./Seiten/Register/Register"));
const AdminHeim = lazy(() => import("./Seiten/Admin/Heim/AdminHeim"));
const ProductAdd = lazy(() => import("./Seiten/Admin/ProductAdd/ProductAdd"));
const CategoryAdd = lazy(() =>
  import("./Seiten/Admin/CategoryAdd/CategoryAdd")
);
const CategoryList = lazy(() =>
  import("./Seiten/Admin/CategoryList/CategoryList")
);

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
          <Route path="/Admin/productAdd" element={<ProductAdd />} />
          <Route path="/Admin/categoryAdd" element={<CategoryAdd />} />
          <Route path="/Admin/categoryList" element={<CategoryList />} />

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

reportWebVitals();
