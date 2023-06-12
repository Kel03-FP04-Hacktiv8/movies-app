import Hero from "../molecules/Hero";
import { Navbar } from "../molecules/Navbar";

const Header = () => {
    const backgroundImg = {
        backgroundImage: "url('images/headerImg.png')",
        height: "550px",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
    }
    return(
        <header id="home" className="container-fluid" style={backgroundImg}>
            <div className="pt-2 mx-9">
                <Navbar />
                <Hero />
            </div>
        </header>
    );
}

export default Header;