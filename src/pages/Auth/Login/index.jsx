import React, { useState } from "react";

function index() {
  const initial = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email && !user.password) {
      return alert("You have to fill all fields.");
    }
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(user.email)) {
      return alert("Email is required. Please enter valid email.");
    }
    if (user.password.length < 5) {
      return alert("Password must be at least 5 characters long.");
    }

    console.log(user);
    setUser(initial);
  };
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
          <div className="col-11 col-sm-8 col-md-5 mt-5 mx-auto bg-light shadow rounded p-4">
            <div className="row">
              <h2 className="display-6 text-center">LogIn</h2>
            </div>
            <hr className="my-3 w-75 mx-auto" />
            <div className="row my-3">
              <div className="col">
                <input
                  className="form-control"
                  type="email"
                  value={user.email}
                  placeholder="Email"
                  name="email"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <div className="input-group mb-3">
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    className="form-control"
                    placeholder="Password"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    id="Password"
                    onChange={(e) => {
                      handleChange(e);
                    }}
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
            <div className="row">
              <div className="col text-center">
                <button
                  className="btn btn-block btn-primary w-50 text-center"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  LogIn Now
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
