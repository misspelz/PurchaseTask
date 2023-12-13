import React, { useState } from "react";
import { Pay } from "./Pay";

export const BillingInfo = ({ onNext }) => {
  const cardType = [
    "Credit Card",
    "Debit Card",
    "Prepaid Card",
    "Charge Card",
    "ATM Card",
    "Gift Card",
    "Business Card",
  ];

  return (
    <>
      <form className="flex flex-col mt-10">
        <label
          htmlFor="cardName"
          className="flex gap-1 font-bold text-[12px] lg:text-[16px] "
        >
          Name on Card <span className="text-red">*</span>
        </label>
        <input
          type="text"
          className="p-3 rounded-[10px] border border-purple outline-none pl-5 mt-2 md:mt-4 text-normalgray  font-semibold"
        />
        <label
          htmlFor="cardType"
          className="flex gap-1 font-bold text-[12px] lg:text-[16px] mt-2 md:mt-4 lg:mt-8"
        >
          Card Type <span className="text-red">*</span>
        </label>
        <select
          id="state"
          name="state"
          className="p-3 rounded-[10px] border border-purple outline-none text-normalgray font-semibold mt-2 md:mt-4"
        >
          {cardType.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <div className=" flex flex-col lg:flex-row mt-2 md:mt-4 lg:mt-8 w-full justify-between">
          <div className="w-full">
            <label
              htmlFor="cardDetails"
              className="flex gap-1 font-bold text-[12px] lg:text-[16px] "
            >
              Card Details <span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="p-3 rounded-[10px] border border-purple outline-none pl-5 mt-2 md:mt-4 text-normalgray  font-semibold w-[95%]"
            />
          </div>

          <div className="w-[50%]">
            <label
              htmlFor="expiryDate"
              className="flex gap-1 font-bold text-[12px] lg:text-[16px] "
            >
              Expiry Date <span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="p-3 rounded-[10px] border border-purple outline-none pl-5 mt-2 md:mt-4 text-normalgray  font-semibold w-[90%]"
            />
          </div>

          <div className="w-[30%]">
            <label
              htmlFor="cvv"
              className="flex gap-1 font-bold text-[12px] lg:text-[16px] "
            >
              CVV <span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="p-3 rounded-[10px] border border-purple outline-none pl-5 mt-2 md:mt-4 text-normalgray  font-semibold w-[100%]"
            />
          </div>
        </div>

        <div className="lg:w-[70%] flex flex-col lg:flex-row justify-between mt-4 mt-2 md:mt-4 lg:mt-8 mb-4 lg:mb-20">
          <button
            onClick={onNext}
            className="bgColor text-left my-4 p-4 text-center bg-orange w-full lg:w-[50%] rounded-[10px] text-[#fff] font-[700]"
          >
            Next
          </button>
          <button className="text-left my-4 text-purple font-[700]">
            Cancel Payment
          </button>
        </div>
      </form>
    </>
  );
};
