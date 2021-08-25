import React from "react";
import Card from "./Card";
import ScrollButton from "./ScrollButton";

function Home(props) {
  return (
    <div>
      <h1 className="h2 text-theme border-bottom my-2 py-3">
        SpaceX launch program
      </h1>
      <div className="row">
        {props.data && props.data.length === 0 && <h3>No record found</h3>}
        {props.data ? (
          props.data.map((elem, ind) => {
            return <Card data={elem} key={ind} />;
          })
        ) : (
          <h4>Loading Data...</h4>
        )}
      </div>
      <ScrollButton />
    </div>
  );
}

export default Home;
