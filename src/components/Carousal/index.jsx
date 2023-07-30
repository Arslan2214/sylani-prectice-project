import React from "react";

function index() {
  const imgObj = [
    {
      imgName: "",
      imgSrc: "",
      head: "",
      text: "",
    },
  ];

  return (
    <>
      {/* Slide Image Carousal */}
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active "
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" style={{ height: "300px" }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60"
              class="d-block w-100"
              alt="product.pic"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="fw-bold fs-3">Products Acc. to Your Taste.</h5>
              <p className="text-light fs-5">
                Its time to Update Your Lifestyle, According to latest trends.
              </p>
            </div>
          </div>
          <div class="carousel-item" style={{ height: "300px" }}>
            <img
              src="https://media.istockphoto.com/id/1319135624/photo/pedestal-with-luxury-rock-concrete-natural-material-product-mockup-presentation-platform.webp?b=1&s=170667a&w=0&k=20&c=WDg4Ejp5Vxvn1vr-7ZcwESOEqUTTUVDgOPFuvLk0XfE="
              class="d-block w-100"
              alt="Tech.pic"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="fw-bold fs-3">Easy to Use.</h5>
              <p className="text-light fs-5">
                With the touch of Technology, Know It's more Easy.
              </p>
            </div>
          </div>
          <div class="carousel-item" style={{ height: "300px" }}>
            <img
              src="https://media.istockphoto.com/id/1165099864/photo/plastic-free-set-with-eco-cotton-bag-glass-jar-green-leaves-and-recycled-tableware-top-view.webp?b=1&s=170667a&w=0&k=20&c=lBKKbQqCp1xAj7rodBEVp_Iv36jjATSgbpTjdx9WB_A="
              class="d-block w-100"
              alt="order.pic"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="fw-bold fs-3">Order Know, Can't wait</h5>
              <p className="text-light fs-5">
                Just go ahead and Order Know, Cool products are in List
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default index;
