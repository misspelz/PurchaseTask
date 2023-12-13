import React from "react";

export const Pay = ({ onPay }) => {
  // Sample data for item names and prices
  const items = [
    { name: "Data science and usability", price: 50000 },
    { name: "Shipping", price: 0 },
  ];

  // Calculate the total price
  const total = items.reduce((acc, item) => acc + item.price, 0);

  // Add the total row to the items array
  const updatedItems = [...items, { name: "Total", price: total }];

  return (
    <div className="mt-4 md:mt-6 lg:mt-10">
      <div className="mt-4 bg-[#fff] rounded-[10px] overflow-hidden shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <table className="w-full rounded-t-[30px]">
          <thead>
            <tr className="bg-blue rounded-t-[30px]">
              <th className="text-left px-16 py-4 text-[#fff] font-[500] lg:text-[18px]">
                Item Name
              </th>
              <th className="text-right px-16 py-4 text-[#fff] font-[500] lg:text-[18px]">
                ₦ Price
              </th>
            </tr>
          </thead>
          <tbody>
            {updatedItems.map((item, index) => (
              <tr
                key={index}
                className={
                  item.name === "Total" ? "border-t border-[#ccc]" : ""
                }
              >
                <td className="text-left px-16 py-4 mt-8 text-purple font-semibold">
                  {item.name}
                </td>
                <td className="text-right px-16 py-4 mt-8 text-purple font-semibold">
                  {item.price.toLocaleString()}.00
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="lg:w-[70%] flex flex-col lg:flex-row justify-between mt-2 md:mt-4 lg:mt-8 mb-4 lg:mb-20">
        <button
          onClick={onPay}
          className="bgColor text-left my-4 p-4 text-center bg-orange w-full lg:w-[50%] rounded-[10px] text-[#fff] font-[700]"
        >
          Pay
        </button>
        <button className="text-left my-4 text-purple font-[700]">
          Cancel Payment
        </button>
      </div>
    </div>
  );
};
