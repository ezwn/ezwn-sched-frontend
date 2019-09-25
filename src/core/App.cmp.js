import React from "react";
import "./App.cmp.css";
import { TaskList } from "features/TaskList.cmp";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8082/graphql"
  }),
  cache
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <TaskList />
      </div>{" "}
    </ApolloProvider>
  );
}

export default App;
