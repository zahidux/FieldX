import React from "react";
import { Helmet } from "react-helmet";
import RegionCart from "./RegionCart";
import regionData from "../../Hook/regionData";

const RegionList = () => {
  const [regions] = regionData();
  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Dashboard Region List</title>
      </Helmet>
      {regions.map((region) => (
        <RegionCart key={region._id} region={region} />
      ))}
    </>
  );
};

export default RegionList;
