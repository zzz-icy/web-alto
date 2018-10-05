import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SummaryPage from '../components/SummaryPage';
import DriverPage from '../components/DriverPage';
import AutoPage from '../components/AutoPage';
import RoutePage from '../components/RoutePage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => (
    // only expects child length of 1

    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={SummaryPage} />
                <Route path="/driver" component={DriverPage} />
                <Route path="/auto" component={AutoPage} />
                <Route path="/route" component={RoutePage} />
                {/* /:id will dynamically match whater comes after the forward slash, id is gonna be in the props.match.params*/}
                <Route component={NotFoundPage} /> {/* do not need path*/}

            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;



