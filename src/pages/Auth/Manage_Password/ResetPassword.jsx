import React from "react";

function ResetPassword() {
  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 col-12 mt-5 p-3 shadow">
            <div className="row text-center mt-4 mb-2">
              <h2 className="display-3">Reset Password</h2>
            </div>
            <div className="row">
              <input
                type="password"
                name="password"
                id='input1'
                value={user.password}
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="button-addon2"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="row">
              <input
                type="password"
                name="confirmPassword"
                id='input2'
                value={user.password}
                className="form-control"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                aria-describedby="button-addon2"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary">Reset Password</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
