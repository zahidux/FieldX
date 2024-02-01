import { NavLink } from "react-router-dom";

const DashLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-blue"
                    : "text-gray hover:text-blue duration-300"
            }
        >
            {children}
        </NavLink>
    );
};

export default DashLink;