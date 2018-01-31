import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'core-js/fn/array/find';
import 'core-js/es6/reflect';
import fetch from 'unfetch';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({fetch}),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppContainer
      />
  </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();
