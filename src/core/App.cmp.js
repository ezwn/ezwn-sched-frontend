import React from "react";
import { TaskList } from "features/TaskList.cmp";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "libs/ezwn-ui/css/layout.css";
import "libs/ezwn-ui/css/look-and-feel.css";
import "libs/ezwn-ui/css/look-dark-bird.css";
import "libs/ezwn-ui/css/components.css";
import "libs/ezwn-ui/css/state-lists.css";
import "./App.cmp.css";

import { ModalProviderCmp } from "libs/ezwn-ui/react/modal/ModalOutput.cmp";
import ModalContext from "libs/ezwn-ui/react/modal/Modal.context";
import { TaskEdit } from "features/TaskEdit.cmp";

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
      <ModalProviderCmp>
        <div className="App prim-full-viewport prim-hz">
          <div className="prim-slice-1">
            <ModalContext.Consumer>
              {showModal => (
                <div
                  className="square-button cursor-pointer"
                  onClick={() =>
                    showModal(<TaskEdit afterSubmit={() => showModal(null)} />)
                  }
                >
                  +
                </div>
              )}
            </ModalContext.Consumer>
          </div>
          <div className="prim-slice-3">
            <TaskList />
          </div>
        </div>
      </ModalProviderCmp>
    </ApolloProvider>
  );
}

export default App;
