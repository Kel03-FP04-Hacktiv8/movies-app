import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="flex flex-row justify-between items-center">
            <NavLink as={Link} to={"/"}>
                <img src="images/logo.png" alt="logo" />
            </NavLink>
            <ul className="flex flex-row text-xl font-semibold">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li  className="mx-12">
                    <a href="#movies">Movies</a>
                </li>
                <li>
                    <a href="#contact">Contact Us</a>
                </li>
            </ul>
            <label className="relative block">
                <input className="truncate bg-inherit text-white placeholder:text-white placeholder:italic placeholder:text-slate-400 placeholder:font-medium block w-full border border-slate-300 rounded-md pl-4 pr-6 py-2 shadow-sm focus:outline-none focus:border-white focus:ring-black focus:ring-1 sm:text-sm" placeholder="Searching movies..." type="text" name="search"/>
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 items-center right-4 flex items-center pl-4 bg-inherit">
                    <Link to={"/"}><i className="fa-solid fa-magnifying-glass fa-beat" style={{color: "#FFFFFF"}}></i></Link>
                </span>
            </label>
            <NavLink as={Link} to={"/"}>
                <img src="images/profile.png" alt="profile" />
            </NavLink>
        </div>
    )
}