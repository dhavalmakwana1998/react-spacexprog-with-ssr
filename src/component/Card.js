import React from "react";
function Card() {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
      <div className="card p-2 my-4">
        <img
          src="https://picsum.photos/id/237/200/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body p-0">
          <h5 className="card-title my-1">FalconSat #1</h5>
          <h6 className="card-detail">Mission Ids :</h6>
          <ul>
            <li>#123</li>
            <li>#fdf123</li>
            <li>#1sdas23</li>
          </ul>
          <div className="w-100 d-flex justify-content-between">
            <h6 className="card-detail">launch Year</h6>
            <h6 className="text-dark text-left">2012</h6>
          </div>
          <div className="w-100 d-flex justify-content-between">
            <h6 className="card-detail">Successfull Launch</h6>
            <h6 className="card-detail">
              : <span className="px-3 badge rounded-pill bg-success">Yes</span>
            </h6>
          </div>
          <div className="w-100 d-flex justify-content-between">
            <h6 className="card-detail">Successfull Landing</h6>
            <h6 className="card-detail">
              : <span className="px-3 badge rounded-pill bg-danger">No</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
