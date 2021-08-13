import React from 'react';
import './app.scss'
import {TodoPage,Weather} from "../pages";
import HeaderNavigation from "../header-navigation/";
import {Route,Switch} from "react-router-dom";
import { history } from "../../reducers";
import {ConnectedRouter} from "connected-react-router";
import NotFound from "../pages/not-found";

const App : React.FC = () => {
    return (
        <ConnectedRouter history={history}>
             <HeaderNavigation/>
             <Switch>
                 <Route path="/" exact component={TodoPage}/>
                 <Route path="/weather" component={Weather}/>
                 <Route component={NotFound}/>
             </Switch>
        </ConnectedRouter>
    );
};

export default App;