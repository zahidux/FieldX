import { useState } from "react";
import { Helmet } from "react-helmet";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const CreateRegion = () => {
    const [region, setRegion] = useState();

    const handleRegion = () => {
        console.log(region)
    }
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Dashboard Create Region</title>
            </Helmet>
            <section className='my-5 md:mx-5 rounded-md duration-300'>
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h2 className="text-2xl text-dark font-semibold">Create Region</h2>

                        <div className="flex items-center gap-1 mt-1 text-sm">
                            <Link to="/dashboard/region"
                                className="text-gray"
                            >Geo</Link> <LuChevronRight className="text-gray text-lg -mb-[1px]" />
                            <Link to="/dashboard/region" className="text-gray">Geo List</Link> <LuChevronRight className="text-gray text-lg -mb-[1px]" />
                            <Link to="/dashboard/create-region" className="text-blue">Create Geo</Link>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex flex-col items-center justify-start rounded-xl">

                    <div className="bg-white flex flex-col w-[475px] p-10 rounded-xl my-6">
                        <label htmlFor="region" className="text-gray mb-2">Region</label>
                        <input id="region" type="text" placeholder="Type region"
                            onChange={(e) => setRegion(e.target.value)}
                            className="w-full border border-gray/50 rounded-lg outline-none py-3 px-2 placeholder:text-gray"
                        />

                        <button onClick={handleRegion} to='/' className="bg-dark text-white py-[10px] px-4 ml-auto mt-14 w-fit gap-1 rounded-xl">Add Region</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CreateRegion;