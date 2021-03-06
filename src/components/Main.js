import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import Login from './Login';
import Register from './Register';
import Home from './Home';

function Main(props) {
    const {isLoggedIn, handleLoggedIn} = props;

    const showLogin = () => {
        // case 1. already logged in
        // case 2. not logged in yet
        return isLoggedIn ? <Redirect to="/home"/> : <Login handleLoggedIn={handleLoggedIn}/>;
    }

    const showHome = () => {
        // case 1. already logged in
        // case 2. not logged in yet
        return isLoggedIn ? <Home/> : <Redirect to="/login"/>;
    }

    return (
        <div className="main">
            <Switch>
                <Route path="/" exact render={showLogin} />
                <Route path="/login" render={showLogin}/>
                <Route path="/register" component={Register}/>
                <Route path="/home" render={showHome}/>
            </Switch>
        </div>
    );
}

export default Main;