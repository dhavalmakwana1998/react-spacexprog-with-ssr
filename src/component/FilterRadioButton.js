import React from "react";

const FilterRadioButton = ({ year, handleChange, isChecked }) => {
  return (
    <li className="nav-item my-1">
      <label className="customlable check">
        <input
          type="radio"
          name="year"
          checked={isChecked}
          onChange={handleChange}
          value={year}
        />
        <span>{year}</span>
      </label>
    </li>
  );
};

export default FilterRadioButton;
