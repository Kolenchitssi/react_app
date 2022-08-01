import { ConnectedRouter } from 'connected-react-router';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { AppProps } from '../App';

// import { Router, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { AddArticle } from './AddArticle/AddArticle';
import { EditArticle } from './EditArticle/EditArticle';
import { ViewArticle } from './Main/ViewArticle/ViewArticle';
import StarWars from './StarWars/StarWars';

const About = lazy(() => import('./About/About'));
const Main = lazy(() => import('./Main/Main'));
const Counters = lazy(() => import('./Counters/Counters'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

function MyRouter({ history }: AppProps): JSX.Element {
  return (
    <ConnectedRouter history={history}>
      <div>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <li>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className='nav-link'
                activeClassName='hurray'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/counters' className='nav-link'>
                Counters
              </NavLink>
            </li>
            <li>
              <NavLink to='/sw' className='nav-link'>
                StarWars
              </NavLink>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div> Loading... </div>}>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/counters'>
              <Counters />
            </Route>
            <Route path='/sw'>
              <StarWars />
            </Route>
            <Route path='/article/:id/view'>
              <ViewArticle />
            </Route>
            <Route path='/article/:id/edit'>
              <EditArticle />
            </Route>
            <Route path='/article/add'>
              <AddArticle />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </ConnectedRouter>
  );
}

export default MyRouter;
