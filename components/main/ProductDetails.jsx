import React from "react";
import ActionButtons from "./ActionButtons";

function ProductDetails({ title, description, price }) {
  return (
    <div className="flex-1">
      <h2 className="text-[30px] font-bold">
        {title.split(" ")[0]}{" "}
        <span className="text-[#DA0037]">{title.split(" ")[1]}</span>
      </h2>
      <p className="mt-[16px] text-[16px]">{description}</p>
      <h2 className="text-[20px] my-[8px] font-semibold text-[#DA0037]">
        {price}
      </h2>

      {/* Buttons Section */}
      <ActionButtons />
    </div>
  );
}

export default ProductDetails;
