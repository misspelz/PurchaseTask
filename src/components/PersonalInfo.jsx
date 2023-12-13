import React from "react";
import { nigerianStates } from "../data";

export const PersonalInfo = ({ onNext }) => {
  return (
    <form className="flex flex-col mt-10">
      <label
        htmlFor="name"
        className="flex flex-col gap-3 font-bold text-[12px] lg:text-[16px]"
      >
        Name
        <input
          type="text"
          className="p-3 rounded-[10px] border border-purple outline-none pl-5 text-normalgray font-semibold"
        />
      </label>

      <label
        htmlFor="email"
        className="flex gap-1 mt-2 md:mt-4 lg:mt-8 font-bold text-[12px] lg:text-[16px]"
      >
        Email Address <span className="text-red">*</span>
      </label>
      <p className="mt-2 text-purple text-[10px] lg:text-[16px]">
        The purchase reciept would be sent to this address
      </p>
      <input
        type="email"
        className="p-3 rounded-[10px] border border-purple outline-none pl-5 mt-2 md:mt-4 text-normalgray  font-semibold"
      />

      <label
        htmlFor="address1"
        className="flex flex-col gap-3 font-bold text-[12px] lg:text-[16px] mt-2 md:mt-4 lg:mt-8"
      >
        Address 1
        <input
          type="text"
          className="p-3 rounded-[10px] border border-purple outline-none pl-5 text-normalgray  font-semibold"
        />
      </label>

      <label
        htmlFor="address1"
        className="flex flex-col gap-3 font-bold text-[12px] lg:text-[16px] mt-2 md:mt-4 lg:mt-8"
      >
        Address 2
        <input
          type="text"
          className="p-3 rounded-[10px] border border-purple outline-none pl-5 text-normalgray  font-semibold"
        />
      </label>

      <div className="flex flex-col md:flex-row gap-10 w-full">
        <label
          htmlFor="address1"
          className="flex flex-col gap-3 font-bold text-[12px] lg:text-[16px] mt-2 md:mt-4 lg:mt-8 w-full"
        >
          Local Government
          <input
            type="text"
            className="p-3 rounded-[10px] border border-purple outline-none pl-5 text-normalgray  font-semibold"
          />
        </label>
        <label
          htmlFor="state"
          className="flex flex-col gap-3 font-bold text-[12px] lg:text-[16px] mt-2 md:mt-4 lg:mt-8 w-[60%]"
        >
          State
          <select
            id="state"
            name="state"
            className="p-3 rounded-[10px] border border-purple outline-none text-normalgray font-semibold"
          >
            {nigerianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="lg:w-[70%] flex flex-col lg:flex-row justify-between mt-2 md:mt-4 lg:mt-8 mb-4 lg:mb-20">
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
  );
};
