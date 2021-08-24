import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Sidebar from "./component/Sidebar";
import { Button } from "bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  render={() => {
                    <h1 className="text-center">404 : Not fount</h1>;
                    <Button className="btn btn-success">
                      <Link to={"/"}>Go to home</Link>
                    </Button>;
                  }}
                />
              </Switch>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
