import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

// import { Router, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import { AddArticle } from "./Main/components/AddArticle/AddArticle";
import { EditArticle } from "./Main/components/EditArticle/EditArticle";
import { ViewArticle } from "./Main/components/ViewArticle/ViewArticle";
import StarWars from "./StarWars/StarWars";

// import About from '../containers/About/About';
// import Counters from './Counters/Counters';
// import Main from '../containers/Main/Main';
// import NotFound from '../containers/NotFound/NotFound';

const About = lazy(() => import("./About/About"));
const Main = lazy(() => import("./Main/Main"));
const Counters = lazy(() => import("./Counters/Counters"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
// const Modal = lazy(() => import("./Main/Modal/Modal"));

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store);

function MyRouter(): JSX.Element {
  return (
    <Router /*history={history}*/>
      <div>
        <nav>
          <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="hurray"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/counters" className="nav-link">
                Counters
              </NavLink>
            </li>
            <li>
              <NavLink to="/sw" className="nav-link">
                StarWars
              </NavLink>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div> Loading... </div>}>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/counters">
              <Counters />
            </Route>
            <Route path="/sw">
              <StarWars />
            </Route>
            <Route path="/article/:id/view">
              <ViewArticle />
            </Route>
            <Route path="/article/:id/edit">
              <EditArticle />
            </Route>
            <Route path="/article/add">
              <AddArticle />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default MyRouter;
