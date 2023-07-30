import React from "react";
import Carousel from "../../../components/Carousal";
import New_Section from "../../../components/New_Section";

function index() {
  return (
    <>
      {/* Carousal Section */}
      <Carousel />
      {/* Adding New Section */}
      <New_Section
        text="Let's work together to achieve our goals, collaborate on ideas,
              share expertise, and build a stronger team. Together, we can
              accomplish great things."
        head="Let's Work together,"
        order="first"
        src="https://images.unsplash.com/photo-1568752172055-6961c4146efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
    </>
  );
}

export default index;
