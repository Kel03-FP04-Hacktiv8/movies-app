import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState  } from "react";

export const Navbar = () => {

    let navigate = useNavigate();
    const [query, setQuery] = useState('');
    const location = useLocation();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query) {
            navigate(`/search/:${query}`);
            setQuery('');
        } else {
            navigate('*');
        }
    };

    const isHomePage = location.pathname === "/";

    const handleInputChange = (e) => {
        setQuery(e.target.value);
      };

    return(
        <div className="flex flex-row justify-between items-center mt-4">
            <NavLink as={Link} to={"/"}>
                <img src="/images/logo.png" alt="logo" />
            </NavLink>
            <ul className="flex flex-row text-xl font-semibold">
                <li>
                    <NavLink as={Link} to={"/"}>Home</NavLink>
                </li>
                {isHomePage && (
                <>
                    <li className="mx-12">
                        <a href="#movies">Movies</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                </>
                )}
            </ul>

            <form className="relative block" onSubmit={handleSubmit}>
                <input 
                    className="truncate bg-inherit text-white placeholder:text-white placeholder:italic placeholder:text-slate-400 placeholder:font-medium block w-full border border-slate-300 rounded-md pl-4 pr-6 py-2 shadow-sm focus:outline-none focus:border-white focus:ring-black focus:ring-1 sm:text-sm"
                    placeholder="Searching movies..."
                    type="search"
                    value={query}
                    onChange={handleInputChange}
                />
                <span className="absolute inset-y-0 items-center right-4 flex items-center pl-4 bg-inherit">
                    <Link to={"/"}><i className="fa-solid fa-magnifying-glass fa-beat" style={{color: "#FFFFFF"}}></i></Link>
                </span>
            </form>

            <NavLink as={Link} to={"/"}>
                <img src="/images/profile.png" alt="profile" />
            </NavLink>

        </div>
    )
}