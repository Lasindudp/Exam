import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import Welcome from '././components/Welcome/Welcome';
//import Home from '././components/Home/Home';
 import Login from './UI/Login';
//import Signup from '././components/Signup/Signup';
//import NotFound from '././components/NotFound/NotFound';

const Routes = () => (
<BrowserRouter >
<Switch>


<Route path="/login" component={Login}/>

</Switch>
</BrowserRouter>
);
export default Routes;