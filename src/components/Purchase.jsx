import React from "react";

const Purchase = () => {
  return (
    <div className="flex flex-col bg-[#fff] px-20 py-16 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="bg-[#fff] w-20 h-20 flex items-center justify-center rounded-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <img
            src="/images/purchase.png"
            alt="complete icon"
            className="mt-4"
          />
        </div>
        <div className="flex flex-col gap-5 pl-20">
          <h2 className="text-purple lg:text-[40px] font-[600]">
            Purchase Completed
          </h2>
          <h5 className="lg:text-[18px] w-[80%]">
            Please check your email for details concerning this transaction
          </h5>
          <p className="text-orange underline lg:text-[18px]">Return Home</p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
