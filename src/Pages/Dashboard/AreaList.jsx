import React from "react";
import areaData from "../../Hook/areaData";
import { Helmet } from "react-helmet";
import AreaCart from "./AreaCart";

const AreaList = () => {
  const [areas] = areaData();

  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Dashboard Area List</title>
      </Helmet>
      {areas.map((area) => (
        <AreaCart key={area._id} area={area} />
      ))}
    </>
  );
};

export default AreaList;
