import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import FilterRadioButton from "./component/FilterRadioButton";
import Home from "./component/Home";

function App() {
  const [mission, setMission] = useState();
  const filterYear = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020,
  ];
  const [year, setYear] = useState();
  const [isLand, setIsLand] = useState();
  const [isLaunch, setIsLaunch] = useState();
  const clearFilter = () => {
    setYear();
    setIsLand();
    setIsLaunch();
  };
  const getData = async () => {
    const res = await axios.get(
      `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${
        isLaunch ? isLaunch : ""
      }&land_success=${isLand ? isLand : ""}&launch_year=${year ? year : ""}`
    );
    setMission(res.data);
  };
  const onChangeHandleYear = (e) => {
    setYear(e.target.value);
  };

  useEffect(() => {
    getData();
  }, [isLaunch, isLand, year]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div className="position-sticky pt-3">
                <h6>Filter by launch year</h6>
                {(year || isLand || isLaunch) && (
                  <button
                    onClick={clearFilter}
                    className="w-100 btn btn-danger"
                  >
                    Clear Filter
                  </button>
                )}
                <ul className="nav justify-content-beetween filter-btn">
                  {filterYear.map((elem, ind) => {
                    return (
                      <FilterRadioButton
                        year={elem}
                        key={ind}
                        isChecked={year == elem ? true : false}
                        handleChange={onChangeHandleYear}
                      />
                    );
                  })}
                </ul>
                <hr />
                <h6>Successfull Launch</h6>
                <ul className="nav justify-content-beetween filter-btn">
                  <li className="nav-item my-1">
                    <label className="customlable check">
                      <input
                        type="radio"
                        checked={isLaunch === true}
                        onChange={() => {
                          setIsLaunch(true);
                        }}
                        name="isLaunch"
                      />
                      <span>Yes</span>
                    </label>
                  </li>
                  <li className="nav-item my-1">
                    <label className="customlable check">
                      <input
                        type="radio"
                        checked={isLaunch === false}
                        onChange={() => {
                          setIsLaunch(false);
                        }}
                        name="isLaunch"
                      />
                      <span>No</span>
                    </label>
                  </li>
                </ul>
                <hr />
                <h6>Successfull Landing</h6>
                <ul className="nav justify-content-beetween filter-btn">
                  <li className="nav-item my-1">
                    <label className="customlable check">
                      <input
                        type="radio"
                        name="isLand"
                        checked={isLand === true}
                        onChange={() => {
                          setIsLand(true);
                        }}
                        value="isLanded"
                      />
                      <span>Yes</span>
                    </label>
                  </li>
                  <li className="nav-item my-1">
                    <label className="customlable check">
                      <input
                        type="radio"
                        checked={isLand === false}
                        onChange={() => {
                          setIsLand(false);
                        }}
                        name="isLand"
                        value="isLanded"
                      />
                      <span>No</span>
                    </label>
                  </li>
                </ul>
              </div>
            </nav>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => {
                    return <Home data={mission} {...props} />;
                  }}
                />
                <Route
                  render={() => {
                    <h1 className="text-center">404 : Not fount</h1>;
                    <button className="btn btn-success">
                      <Link to={"/"}>Go to home</Link>
                    </button>;
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
