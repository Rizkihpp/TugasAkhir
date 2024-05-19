import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./component/Login.js";
import Register from "./component/Register.js"
import Navbar from "./component/Navbar.js";
import Dashboard from "./component/Dashboard.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Navbar/>
          <Dashboard/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
