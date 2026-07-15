import React, { useState } from "react";
import product1 from "../assets/product1.avif";
import hover1 from "../assets/product1tea.avif";
import product2 from "../assets/product2.avif";
import hover2 from "../assets/product2tea.avif";
import product3 from "../assets/product3.avif";
import hover3 from "../assets/product3tea.avif";
import product4 from "../assets/product4.avif";
import hover4 from "../assets/product4tea.avif";

const Products = () => {
  const [image1, setImage1] = useState(hover1);
  const [image2, setImage2] = useState(hover2);
  const [image3, setImage3] = useState(hover3);
  const [image4, setImage4] = useState(hover4);
  return (
    <div className="p-5  ">
      <section className=" flex gap-2 justify-between  w-full">
        <div className="w-[25%] h-125 ">
          <img
            className="h-full w-full "
            src={image1}
            onMouseEnter={() => setImage1(product1)}
            onMouseLeave={() => setImage1(hover1)}
            alt=""
          />
          <p className="font-mono text-[20px]">Rosemerry Specials</p>
          <p className="font-mono text-[20px]">$ 5.00</p>
        </div>
        <div className="w-[25%] h-125 ">
          <img
            className="h-full w-full "
            src={image2}
            onMouseEnter={() => setImage2(product2)}
            onMouseLeave={() => setImage2(hover2)}
            alt=""
          />
          <p className="font-mono text-[20px]">Raspberry Leaves</p>
          <p className="font-mono text-[20px]">$ 8.00</p>
        </div>
        <div className="w-[25%] h-125  ">
          <img
            className="h-full w-full "
            src={image3}
            onMouseEnter={() => setImage3(product3)}
            onMouseLeave={() => setImage3(hover3)}
            alt=""
          />
          <p className="font-mono text-[20px]">Chamomile Tea</p>
          <p className="font-mono text-[20px]">$ 8.00</p>
        </div>
        <div className="w-[25%] h-125  ">
          <img
            className="h-full w-full "
            src={image4}
            onMouseEnter={() => setImage4(product4)}
            onMouseLeave={() => setImage4(hover4)}
            alt=""
          />
          <p className="font-mono text-[20px]">Hibisus Flower</p>
          <p className="font-mono text-[20px]"> $ 7.00</p>
        </div>
      </section>
    </div>
  );
};

export default Products;
