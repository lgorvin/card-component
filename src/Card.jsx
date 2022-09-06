import React from "react";

const Card = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="absolute  inset-x-[50%] bg-white rounded-r-xl min-w-[100px] h-[620px] sm:w-[25%] w-[35%]">
        <h1 className="pt-8 pb-4 px-6 mons color1">P E R F U M E</h1>
        <h1 className="px-6 text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-left fraunce text-black">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="mons text-sm md:text-md lg:text-lg xl:text-2xl color1 px-6 py-4 font-medium text-left">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl py-0 px-6 fraunce color2">
          $149.99{" "}
          <span className="text-xs px-2 line-through text-gray-400">
            $169.99
          </span>
        </p>
        <div className="grid place-items-center">
          <button className="bgColor2 rounded-md hover:border-b-2 hover:border-r-2 hover:border-l-2 hover:border-t-2 hover:border-slate-400 hover:shadow-md duration-200 my-[10%] text-xs sm:text-sm px-0 sm:px-2 md:px-8 xl:px-16 py-2 lg:py-4 text-white">
            <svg
              className="fixed mx-[-24px]"
              width="15"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                fill="#FFF"
              />
            </svg>
            <span className="px-4">Add to Cart</span>
          </button>
        </div>
      </div>
      <div className="absolute opacity-80 hover:opacity-100 hover:scale-105 duration-300 inset-x-[10%]  sm:inset-x-[20%] bg1 rounded-l-xl min-w-[50px] h-[620px] w-[40%] sm:w-[30%]"></div>
    </div>
  );
};

export default Card;

<div className="bg-black rounded-l-xl h-[100%] w-[50%] ">
  <h1 className="inset-x-[54%] py-4 text-right fraunce color1">PERFUME</h1>
  <h1 className="inset-x-[54%] py-10 text-right fraunce color1">
    Gabrielle Essence Eau De Parfum
  </h1>
</div>;
