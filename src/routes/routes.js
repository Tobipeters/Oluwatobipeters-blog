import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const mainRoutes = () =>{
    return(
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path="/blog" />
                </Switch>
            </Fragment>
        </Router>
    )
}

export default mainRoutes;
