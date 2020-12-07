import logo from './logo.svg';
import MainPage from "./components/Index";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (



<Router>
<nav class="mynav navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">MyHackernews</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <a class="nav-link" href="#"><Link to="/">News</Link></a>
      
      </li>
      <li class="nav-item active">
      <a class="nav-link" href="#"><Link to="/past">past</Link></a>
      
      </li>
      <li class="nav-item active">
      <a class="nav-link" href="#"><Link to="/comments">comments</Link></a>
      
      </li>
      <li class="nav-item active">
      <a class="nav-link" href="#"><Link to="/ask">ask</Link></a>
      
      </li>
    
    </ul>
  </div>
</nav>
      
<Switch>
        <Route path="/" component={MainPage} />
       
      
       
      </Switch>
</Router>




  );
}

export default App;
