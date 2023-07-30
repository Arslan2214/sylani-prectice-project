import React from "react";

function index({src, text, head, order = null}) {
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex">
          <div
            className={`col-12 my-5 col-md-6 d-flex flex-column justify-content-end order-first order-md-${
              !order ? "first" : order
            }`}
          >
            <h2 className="fs-3 fs-md-2">{head}</h2>
            <p className="fs-5 text-justify">
              {text}
            </p>
          </div>
          <div className="col-12 col-md-6 py-1 px-5 mt-5">
            <img
              src={src}
              alt="product.jpg"
              className="img-fluid shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
