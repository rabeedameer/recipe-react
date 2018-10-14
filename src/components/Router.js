import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import Recipe from './Recipe';

const Router = () => (
    <BrowserRouter>
        <switch>
          <Route exact path="/" component={App}/>
          <Route path="/recipe/:id" component={Recipe}/>
        </switch>
    </BrowserRouter>
)


export default Router;