import React, { useState } from "react";
import Card from "./Card";
import Pagination from "@material-ui/lab/Pagination";

function Home() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      <h1 className="h2 text-theme border-bottom my-2 py-3">
        SpaceX launch program
      </h1>
      <div className="row">
        {Array.from(Array(8).keys()).map((ele, ind) => {
          return <Card key={ind} />;
        })}
        <div className="d-flex justify-content-center">
          <Pagination
            className="my-3 "
            count={10}
            defaultPage={page}
            variant="outlined"
            color="primary"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
