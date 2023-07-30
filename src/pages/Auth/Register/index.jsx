import React from "react";

function index() {
  const clicked = (id, e) => {
    if (document.getElementById(id).type === "password") {
      document.getElementById(id).type = "text";
      e.target.innerText = "visibility_off";
    } else {
      e.target.innerText = "visibility";
      document.getElementById(id).type = "password";
    }
  };

  return (
    <>
      <div className="container-fluid pt-5 bg-info" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-12 col-md-6 mt-5 mx-auto bg-light shadow rounded p-4">
            <div className="row">
              <h2 className="display-6 text-center">Register Ourself</h2>
            </div>
            <hr className="my-3 w-75 mx-auto" />
            <div className="row my-3">
              <div className="col-12 my-1 col-md-6">
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                />
              </div>
              <div className="col-12 my-1 col-md-6">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    id="Password"
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    id="button-addon2"
                    onClick={(e) => {
                      clicked("Password", e);
                    }}
                  >
                    <span className="material-symbols-outlined">
                      visibility_off
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    id="crfmPassword"
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    id="button-addon2"
                    onClick={(e) => {
                      clicked("crfmPassword", e);
                    }}
                  >
                    <span className="material-symbols-outlined ">
                      visibility_off
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <button className="btn btn-block btn-primary w-50 text-center">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
