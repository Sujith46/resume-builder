import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
// import PageNotFound from '../app/pages/PageNotFound/PageNotFound';
import CreateResume from '../pages/CreateResume/CreateResume';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/create" component={CreateResume} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;