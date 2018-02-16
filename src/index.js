import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/App';
import UpdateData from './components/UpdateData';
import registerServiceWorker from './registerServiceWorker';

// ie support 
import 'core-js/fn/array/find';
import 'core-js/fn/array/from';
import 'core-js/es6/reflect';
import 'core-js/es6/number';
import fetch from 'unfetch';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({fetch}),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Router>
    <div>
      <ApolloProvider client={client}>
        <Route exact path="/" component={AppContainer} />
      </ApolloProvider>
      <Route exact path="/push-latest-changes-from-google-sheet" component={UpdateData} />
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
