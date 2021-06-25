import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./containers/Admin";
import Home from "./containers/Home";
import { routeAdmin, routeHome } from "./routes";
import Error from "./containers/Error";

const showLayoutAdmin = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <Admin
          key={index}
          exact={item.exact}
          path={item.path}
          component={item.component}
        />
      );
    });
  }
};

const showLayoutHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <Home
          key={index}
          exact={item.exact}
          path={item.path}
          component={item.component}
        />
      );
    });
  }
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {showLayoutAdmin(routeAdmin)}

          {showLayoutHome(routeHome)}

          {/* Không tìm ra trang nào */}
          <Route path="" component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
