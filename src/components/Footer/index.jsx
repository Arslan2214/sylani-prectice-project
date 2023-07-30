import React from "react";

function index() {
  return (
    <>
      <footer className="bg-dark text-white mt-5 p-3 fs-5 text-center">
        &copy;{new Date().getFullYear().toString(10)} | All Rights Reserved.
      </footer>
    </>
  );
}

export default index;
