
import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';

import Home from './components/Pages/Home';
import ToDo from './components/Pages/ToDo/ToDo';
import LoginPage from './components/Pages/LoginPage';

import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
function App() {
  return (
    <Router>
        <section>
          <BrandHeader></BrandHeader>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/ToDo" exact>
                <section class="flex justify-center items-center justify-items-start h-full">
                <ToDo />
                </section>
              </Route>
              <Route path="/Login" exact>
                <section class="flex justify-center  bg-purple-400 h-screen items-center">
                <LoginPage />
                </section>
              </Route>

            </Switch>
        </section>
   </Router>
   
  );
}

export default App;
