import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { MyForm } from "./Main/components/Form/Form";
import { NewForm } from "./Main/components/Form/newForm";

// import About from '../containers/About/About';
// import Counters from './Counters/Counters';
// import Main from '../containers/Main/Main';
// import NotFound from '../containers/NotFound/NotFound';

const About = lazy(() => import("./About/About"));
const Main = lazy(() => import("./Main/Main"));
const Counters = lazy(() => import("./Counters/Counters"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
// const Modal = lazy(() => import("./Main/Modal/Modal"));

function MyRouter(): JSX.Element {
  return (
    <Router>
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
            {/* <li>
              <Link to="/addArticle">addArticle</Link>
            </li> */}
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
            <Route path="/article/:id">
              {/* <MyForm typeAction="EDIT" /> */}
              <NewForm typeAction="EDIT" />
            </Route>
            <Route path="/addArticle">
              {/* <MyForm typeAction="ADD" /> */}
              <NewForm typeAction="ADD" />
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
