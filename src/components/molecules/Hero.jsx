import { Link, NavLink } from "react-router-dom";

const Hero = () => {
    return(
        <div className="ml-2">
            <NavLink as={Link} to={"/"}>
                <img src="images/disneyLogo.png" alt="logo Disney" className="mt-28 w-[20%] h-[20%]" />
            </NavLink>
            <p className="my-7 w-[40em] text-justify">Luca Paguro is a pre-teen sea monster living off the coast of the Italian city of Portorosso who spends his days herding a school of fish. His parents, Daniela and Lorenzo, restrict him from going to the surface out of fear, but doing the same thing day after day ends up making Luca bored.</p>
            <div className="flex flex-row">
                <button className="py-2 px-4 font-medium rounded-md border bg-white border-white text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <Link to="https://movies.disney.id/luca" target="_blank"><i className="fa-solid fa-play fa-bounce pr-3" style={{color: "#000000"}}></i></Link>
                    WATCH TRAILER
                </button>
                <button className="py-2 px-4 mx-5 font-medium rounded-md border bg-inherit border-white text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <Link to={"/"}><i class="fa-solid fa-exclamation fa-shake pr-3"></i></Link>
                    MORE INFORMATION
                </button>
            </div>
        </div>
    );
}

export default Hero;