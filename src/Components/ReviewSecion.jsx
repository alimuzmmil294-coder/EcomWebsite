import React from "react";

const ReviewSecion = () => {
  return (
    <div className="h-screen text-[22px] text-[#082237] font-mono py-20 text-center">
      <h1 className=" text-5xl py-5 "  >Review</h1>
      <section className="flex justify-around ">
        <div className="text-center p-5">
          <div className="py-3">
            <p className="text-lg font-bold ">⭐⭐⭐⭐⭐</p>
            <p className="">ELLA DAVIDSON</p>
          </div>
          <p className="">
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services.”
          </p>
        </div>
        <div className="text-center p-5">
          <div className="text-lg font-bold py-3">
            <p className=" ">⭐⭐⭐⭐⭐</p>
            <p>Ray Simons</p>
          </div>
          <p>
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services.”
          </p>
        </div>
        <div className="text-center p-5">
          <div className="text-lg font-bold py-3">
            <p className=" ">⭐⭐⭐⭐⭐</p>
            <p className="">Kate Braxton</p>
          </div>
          <p>
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReviewSecion;
