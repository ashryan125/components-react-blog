import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { setContext } from '@apollo/client/link/context';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SinglePost from './pages/Singlepost';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <div>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    {/* <Route path="/profile">
                        <Profile />
                    </Route> */}
                    {/* <Route path="/post">
                        <Post />
                    </Route> */}
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default App;