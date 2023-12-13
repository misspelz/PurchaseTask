import React, { useState } from "react";
import { PersonalInfo } from "./PersonalInfo";
import { BillingInfo } from "./BillingInfo";
import { ConfirmPayment } from "./ConfirmPayment";
import { Pay } from "./Pay";
import Purchase from "./Purchase";

export const Payment = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [total, setTotal] = useState(false);
  const [purchase, setPurchase] = useState(false);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePay = () => {
    setTotal(true);
    setPurchase(false);
  };

  const handlePurchase = () => {
    setPurchase(true);
  };

  return (
    <div className="relative">
      <img src="./images/bg.png" alt="bg_image" />
      {!purchase && (
        <div className="absolute top-20 flex flex-col justify-center items-center w-full bg-green-500">
          <div className="bg-red-500 w-[90%] md:w-[60%] lg:w-[60%] relative">
            <h2 className="text-purple text-[18px] md:text-[24px] lg:text-[30px] font-bold text-center md:text-left">
              Complete your Purchase
            </h2>

            <div className="flex flex-col md:flex-row justify-between mt-2 md:mt-10">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center ${
                    activeStep === index + 1 ? "z-[2]" : "z-[1]"
                  } md:inline`}
                >
                  <div
                    className={`lg:text-[20px] font-[600] ${
                      activeStep === index + 1
                        ? "bg-white text-orange"
                        : "text-gray"
                    }`}
                  >
                    {index === 0 && "Personal Info"}
                    {index === 1 && "Billing Info"}
                    {index === 2 && "Confirm Payment"}
                  </div>
                  {activeStep === index + 1 && (
                    <div className="bg-orange h-2 rounded-full md:mt-4"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-[#000] h-[1px] w-full absolute md:top-[120px] lg:top-[135px] hidden md:block"></div>

            {activeStep === 1 && <PersonalInfo onNext={handleNext} />}
            {activeStep === 2 && total && !purchase && (
              <Pay onPay={handlePurchase} />
            )}

            {activeStep === 2 &&
              (!total ? <BillingInfo onNext={handlePay} /> : "")}
            {activeStep === 3 && <ConfirmPayment />}
          </div>
        </div>
      )}

      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center w-full">
        {purchase && <Purchase />}
      </div>
    </div>
  );
};
