import React, { useState } from "react";
import FilterRadioButton from "./FilterRadioButton";

function Sidebar() {
  const filterYear = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020,
  ];
  const [year, setYear] = useState(2020);
  const [isLand, setIsLand] = useState(null);
  const [isLaunch, setIsLaunch] = useState(null);

  const onChangeHandleYear = (e) => {
    console.log(e.target.value);
  };
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <h6>Filter by launch year</h6>
        <ul className="nav justify-content-beetween filter-btn">
          {filterYear.map((elem, ind) => {
            return (
              <FilterRadioButton
                year={elem}
                key={ind}
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
  );
}

export default Sidebar;
