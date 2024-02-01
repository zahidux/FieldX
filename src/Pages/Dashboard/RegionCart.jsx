import React from "react";

const RegionCart = ({ region, refetch }) => {
  // console.log(region);

  const { _id, region: regionData } = region;

  return (
    <div className="py-4 ">
      <div className="w-[1400px] mx-auto bg-white rounded-xl px-20">
        <div className="flex items-center py-5 border-b-2 border-[#dbe3f8] ">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="h-4 w-4"
          />
          <p className="mx-12 text-xl">0</p>
          <p className="mx-12 text-xl">{regionData}</p>
        </div>
      </div>
    </div>
  );
};

export default RegionCart;
