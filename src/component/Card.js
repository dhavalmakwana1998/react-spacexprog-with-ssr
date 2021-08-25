import React from "react";
function Card(props) {
  const { links, mission_name, rocket, launch_year, launch_success } =
    props.data;
  const { land_success } = rocket.first_stage.cores[0];

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
      <div className="card p-2 my-4">
        <div className="card-img p-3 bg-light">
          <img
            src={links.mission_patch}
            className="card-img-top"
            alt="spacex-mission-image"
          />
        </div>
        <div className="card-body p-0">
          <h5 className="card-title my-1">{mission_name}</h5>
          <h6 className="card-detail">Mission Ids :</h6>
          <ul>
            <li>#123</li>
            <li>#fdf123</li>
            <li>#1sdas23</li>
          </ul>
          <div className="w-100 d-flex justify-content-between">
            <h6 className="card-detail">launch Year</h6>
            <h6 className="text-dark text-left">{launch_year}</h6>
          </div>
          <div className="w-100 d-flex justify-content-between">
            <h6 className="card-detail">Successfull Launch</h6>
            <h6 className="card-detail">
              <span
                className={
                  "px-3 badge rounded-pill " +
                  (launch_success ? "bg-success" : "bg-danger")
                }
              >
                {launch_success ? "YES" : "NO"}
              </span>
            </h6>
          </div>
          <div className="w-100 d-flex justify-content-between">
            <h6 className="card-detail">Successfull Landing</h6>
            <h6 className="card-detail">
              <span
                className={
                  "px-3 badge rounded-pill " +
                  (land_success ? "bg-success" : "bg-danger")
                }
              >
                {land_success ? "YES" : "NO"}
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
