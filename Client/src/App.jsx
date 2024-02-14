import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import { CartProvider } from "./utils/CartContext";

const httpLink = createHttpLink({
  uri: "/graphql",
});
// Initialize Apollo Client

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <main>
          <NavTabs />
          <Outlet />
        </main>
      </CartProvider>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
