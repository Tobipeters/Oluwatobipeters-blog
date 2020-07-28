import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

export default mainRoutes