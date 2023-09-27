import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router className="App">
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/users">
          <UserList/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
