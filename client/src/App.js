import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Post from './pages/Post';


function App() {
    return (
        <div>
            <Login/>
            <Signup/>
            <Router>
                <Header />
                {/* <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/post">
                        <Post />
                    </Route>
                </Switch> */}
            </Router>
            <Footer />
        </div>
    )
}

export default App;