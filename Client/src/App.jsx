import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Outlet } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main>
        <NavTabs />
        <Outlet />
      </main>
      <Footer />
    </ApolloProvider>
  );
}



export default App;
