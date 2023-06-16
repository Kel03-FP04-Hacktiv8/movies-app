import React from "react";
import { Link, NavLink } from "react-router-dom";
import CariForm from "./CariForm";
import { useDispatch } from "react-redux";
import { getMovie } from "../store/reducer/movie";

export const Navbar = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(getMovie(values));
    };

    return(
        <div className="flex flex-row justify-between items-center mt-4">
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
                <CariForm onSubmit={handleSubmit} />

                
            </label>

            <NavLink as={Link} to={"/"}>
                <img src="images/profile.png" alt="profile" />
            </NavLink>
        </div>
    )
}