import './App.css';

/**import composent */
import Random from "./components/organism/Random"
import Breeds from "./components/organism/Breeds"
import Vote from "./components/organism/Vote"
import Fav from "./components/organism/Fav"

/**import react router */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <div className="wrapper w-full">
          <Router>
            <div className="flex w-full">
              <nav className="w-1/4 h-screen bg-blue-900">
                <ul className="text-center text-white">
                  <li className="p-1 m-2 hover:border-blue-200 border-b-2 border-blue-900">
                    <Link  to="/random">Random</Link>
                  </li>
                  <li className="p-1 m-2 hover:border-blue-200 border-b-2 border-blue-900">
                    <Link to="/breeds">Breeds</Link>
                  </li>
                  <li className="p-1 m-2 hover:border-blue-200 border-b-2 border-blue-900">
                    <Link to="/vote">Vote</Link>
                  </li>
                  <li className="p-1 m-2 hover:border-blue-200 border-b-2 border-blue-900">
                    <Link to="/fav">Favourites</Link>
                  </li>
                </ul>
              </nav>

              <Switch className="w-3/4">
                <Route path="/random">
                  <Random />
                </Route>
                <Route path="/breeds">
                  <Breeds />
                </Route>
                <Route path="/vote">
                  <Vote />
                </Route>
                <Route path="/fav">
                  <Fav />
                </Route>
              </Switch>
            </div>
          </Router>
      </div>
  );

}

export default App;
