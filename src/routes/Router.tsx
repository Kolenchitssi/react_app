import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

// import About from '../containers/About/About';
// import Counters from '../components/Counters/Counters';
// import Main from '../containers/Main/Main';
// import NotFound from '../containers/NotFound/NotFound';
const About = lazy(()=> import('../containers/About/About'));
const Main = lazy(()=> import('../containers/Main/Main'));
const Counters = lazy(()=> import('./Counters/Counters'));
const NotFound = lazy(()=> import('../containers/NotFound/NotFound'));

function MyRouter(): JSX.Element {
  return (   
    <Router>
      <div>
        <nav>
          <ul style={{display:"flex", justifyContent:"space-evenly"}}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/about" activeClassName="hurray">About</NavLink>
            </li>            
            <li>
              <Link to="/counters">Counters</Link>
            </li>            
          </ul>
        </nav>

        <Suspense fallback={<div> Loading... </div>}>
        <Switch>
        <Route exact path="/">
            {/* <Main /> */}
            {Main}
          </Route>

          <Route path="/about">
           {/* <About /> */}
           {About}
          </Route>

          <Route path="/counters">
            {/* <Counters /> */}
            {Counters}
          </Route> 

          <Route>
            <NotFound />
          </Route>
          
        </Switch>
        </Suspense>
      </div>
    </Router>    
  )
}

export default MyRouter;
