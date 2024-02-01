import { useState } from "react";
import { Helmet } from "react-helmet";
import { LuChevronRight } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateArea = () => {
  const [region, setRegion] = useState();
  const [area, setArea] = useState();
  const navigate = useNavigate();

  const handleArea = () => {
    // console.log(region, area);
    const areaInfo = { region, area };

    fetch("http://localhost:5000/area", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(areaInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        Swal.fire("Area Added Successfully");
        navigate("/dashboard/arealist");
      });
  };
  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Dashboard Create Area</title>
      </Helmet>
      <section className="my-5 md:mx-5 rounded-md duration-300">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl text-dark font-semibold">Create Area</h2>

            <div className="flex items-center gap-1 mt-1 text-sm">
              <Link to="/dashboard/region" className="text-gray">
                Geo
              </Link>{" "}
              <LuChevronRight className="text-gray text-lg -mb-[1px]" />
              <Link to="/dashboard/area" className="text-gray">
                Geo List
              </Link>{" "}
              <LuChevronRight className="text-gray text-lg -mb-[1px]" />
              <Link to="/dashboard/create-region" className="text-blue">
                Create Geo
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-start rounded-xl">
          <div className="bg-white flex flex-col w-[475px] p-10 rounded-xl my-6">
            <label htmlFor="region" className="text-dark mb-1">
              Region
            </label>
            <select
              id="region"
              type="text"
              onChange={(e) => setRegion(e.target.value)}
              className="w-full border border-gray/50 rounded-lg outline-none py-3 px-2 placeholder:text-gray text-gray"
            >
              <option value="">Select region</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Khulna">Khulna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Narail">Narail</option>
              <option value="Jessore">Jessore</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
              <option value="Gazipur">Gazipur</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Tangail">Tangail</option>
            </select>

            <label htmlFor="area" className="text-dark mb-1 mt-5">
              Area
            </label>
            <input
              id="area"
              type="text"
              placeholder="Type area"
              onChange={(e) => setArea(e.target.value)}
              className="md:w-full border border-gray/50 rounded-lg outline-none py-3 px-2 placeholder:text-gray"
            />

            <button
              onClick={handleArea}
              to="/"
              className="bg-dark text-white py-[10px] px-4 md:ml-auto mt-14 w-fit gap-1 rounded-xl"
            >
              Add Region
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateArea;
