import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Heim from "./Seiten/Heim/HeimSeite"
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { ErrorLink, onError, OnError } from '@apollo/client/link/error';

const root = ReactDOM.createRoot(document.getElementById('root'));

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql Error ${message} ${location} ${path}`);
    })
  }
});


const link = from([errorLink, new HttpLink({ uri: "http://127.0.0.1:10000" })]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link:link
})
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <Heim />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
