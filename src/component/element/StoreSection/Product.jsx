import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Product = () => {
  const productContent = [
    {
      img: "/image/store/product/img-1.png",
      title: "Men’s Sports Jersey",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-2.png",
      title: "sports Polo Tshirt",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-3.png",
      title: "air tag Jersey",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-4.png",
      title: "full sleeve jersey ",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-1.png",
      title: "Men’s Sports Jersey ",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-2.png",
      title: "sports Polo Tshirt ",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-3.png",
      title: "air tag Jersey ",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-4.png",
      title: "full sleeve jersey  ",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-1.png",
      title: "Men’s Sports Jersey ",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-2.png",
      title: "sports Polo Tshirt ",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-3.png",
      title: "air tag Jersey",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-4.png",
      title: "full sleeve jersey  ",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-1.png",
      title: "Men’s Sports Jersey  ",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-2.png",
      title: "sports Polo Tshirt  ",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-3.png",
      title: "air tag Jersey  ",
      price: "$70.00 - $85.00",
    },
    {
      img: "/image/store/product/img-4.png",
      title: "full sleeve jersey   ",
      price: "$70.00 - $85.00",
    },
  ];

  return (
    <div className="product-section md:px-[40px] px-[20px] pt-[40px] pb-[60px]">
      <div className="flex items-center justify-end">
        <select>
          <option value="" selected>
            SORT BY LATEST
          </option>
          <option value="" selected>
            Lowest
          </option>
          <option value="" selected>
            Highest
          </option>
          <option value="" selected>
            Price A to Z
          </option>
        </select>
      </div>
      <div className="products grid lg:grid-cols-4 grid-cols-2 gap-x-4 gap-y-8 mt-[30px]">
        {productContent.map((element, index) => {
          return (
            <div className="  cursor-pointer overflow-hidden" key={index}>
              <div className=" group relative overflow-hidden flex items-center justify-center p-4 rounded-[20px] bg-[#F6F5F8] z-10">
                <div className="animation w-[100px] h-[350px] bg-red absolute  top-[-3rem] left-[50%] skew-x-[-15deg] translate-x-[-50%] z-[-1] opacity-0 transition duration-300 group-hover:opacity-100"></div>
                <img
                  src={element.img}
                  className="md:h-[200px] h-[150px] "
                  alt=""
                />
              </div>
              <div className="price-section mt-4">
                <h4 className=" lg:text-[25px] sm:text-[22px] text-[18px] font-primary uppercase font-bold text-black ">
                  {element.title}
                </h4>
                <p className="font-primary font-medium text-red ">
                  {element.price}
                </p>
                <button className="uppercase font-primary w-full block py-2 font-medium mt-3  text-white bg-black transition duration-300 hover:bg-red hover:scale-105">
                  <span className="flex items-center justify-center">
                    {" "}
                    Learn more{" "}
                    <MdOutlineKeyboardDoubleArrowRight className="inline text-[20px]" />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-8 w-full">
        <button className="btn-primary">
          View more{" "}
          <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default Product;
