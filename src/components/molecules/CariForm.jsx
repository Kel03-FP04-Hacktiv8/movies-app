import React from "react";
import { Field, reduxForm } from "redux-form";

let CariForm = (props) => {
    const { handleSubmit, submitting } = props;

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <Field
                name="cari"
                type="text"
                component="input"
                className="truncate bg-inherit text-white placeholder:text-white placeholder:italic placeholder:text-slate-400 placeholder:font-medium block w-full border border-slate-300 rounded-md pl-4 pr-6 py-2 shadow-sm focus:outline-none focus:border-white focus:ring-black focus:ring-1 sm:text-sm"
            />
            <button
                className="btn btn-outline-success absolute inset-y-0 items-center right-4 flex items-center pl-4 bg-inherit"
                type="submit"
                disabled={submitting}
            >
                <i className="fa-solid fa-magnifying-glass fa-beat" style={{color: "#FFFFFF"}}></i>
            </button>

            {/* <input className="truncate bg-inherit text-white placeholder:text-white placeholder:italic placeholder:text-slate-400 placeholder:font-medium block w-full border border-slate-300 rounded-md pl-4 pr-6 py-2 shadow-sm focus:outline-none focus:border-white focus:ring-black focus:ring-1 sm:text-sm" placeholder="Searching movies..." type="text" name="search"/>
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 items-center right-4 flex items-center pl-4 bg-inherit">
                    <Link to={"/"}></Link>
                </span> */}
        </form>
    );
};

export default CariForm = reduxForm({
    form: "CariForm",
})(CariForm);
