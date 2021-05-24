import './App.css';

/**Import des composants des différentes pages */
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
      <div className="wrapper max-w-6xl mx-auto my-auto">
          <Router > {/**Menu de navigation */}
            <div className="flex w-full">
              <nav className="w-1/4 h-screen bg-blue-900  max-w-xs">
                <ul className="text-center text-white font-bold">
                  <li className="link-nav">{/**Classe personnalisée Tailwind CSS à retrouver dans un index.css */}
                    <Link  to="/">Random</Link>
                  </li>
                  <li className="link-nav">
                    <Link to="/breeds">Breeds</Link>
                  </li>
                  <li className="link-nav">
                    <Link to="/vote">Vote</Link>
                  </li>
                  <li className="link-nav">
                    <Link to="/fav">Favourites</Link>
                  </li>
                </ul>
                <div className="text-white font-bold absolute bottom-0 mx-2 hidden md:block">
                  <p>BY Alex Pawlonski</p>
                </div>
              </nav>
              {/**Switch qui affiche les différents composants quand on clique sur le menu de navigation */}
              <Switch className="w-3/4">
                <Route exact path="/">
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
