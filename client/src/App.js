import React, {Component} from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import People from './components/People';
import PersonInfo from './components/PersonInfo';
import './App.css';
import logo from './logo.png';

//create a new apollo client that points to the proxy endpoint
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

class App extends Component {
  render () {
    //render out the set up components under the apollo client
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className = "container">
            <img src={logo} alt="Star Wars" style={{ width: 300, display: "block", margin: 'auto' }} />
            <Route exact path="/" component={People}/>
            <Route exact path="/person/:name" component={PersonInfo}/>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
