import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="drop-shadow-2xl footer footer-center pt-24 pb-3 bg-primary text-white text-center"
      id="contact"
    >
      <div>
        <h1 className="font-bold text-xl">React me out</h1>
        <div className="flex flex-rows space-x-4 mt-5 mb-7 justify-center">
          <Link to="https://www.instagram.com/" target="_blank">
            <img src="/images/ci_instagram.png" alt="instagram" />
          </Link>
          <Link
            to="https://github.com/Kel03-FP04-Hacktiv8/movies-app"
            target="_blank"
          >
            <img src="/images/ci_github.png" alt="github" />
          </Link>
          <Link
            to="https://discord.com/channels/1074976329658802206/1074976329658802211"
            target="_blank"
          >
            <img src="/images/ci_discord.png" alt="discord" />
          </Link>
          <Link to="https://twitter.com/" target="_blank">
            <img src="/images/ci_twitter.png" alt="twitter" />
          </Link>
        </div>
        <p className="font-extralight tracking-wider">
          &copy; Kelompok 03 FP04 2023 &bull; Got any feedback?
        </p>
      </div>
    </footer>
  );
};

export default Footer;
