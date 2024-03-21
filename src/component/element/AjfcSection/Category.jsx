import React from "react";

const Category = () => {
  const content = [
    "MEN",
    "U13",
    "U10",
    "U7",
    "U15",
    "U12",
    "U9",
    "U6",
    "U14",
    "U11",
    "U8",
    "U5",
  ];

  return (
    <main className="py-[60px] md:px-[40px] px-[20px] bg-[#F6F5F8] sm:block hidden">
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-10 gap-6">
        {content.map((element, index) => {
          return (
            <button className="max-w-[250px] h-[75px] bg-red text-white transition duration-300 hover:bg-[#9c081c] hover:text-white focus:bg-[#9c081c] focus:text-white flex items-center justify-center text-[30px] font-semibold">
              {element}
            </button>
          );
        })}
      </div>
    </main>
  );
};

export default Category;
