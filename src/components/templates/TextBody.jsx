import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Card from "../atoms/Card";
import HeadingText from "../atoms/HeadingText";
import { getMovie } from "../store/reducer/movie";

const TextBody = () => {
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(getMovie());
    }, [dispatch]);

    return(
        <section className="container-fluid mx-11 mt-12 font-bold text-lg">
            <HeadingText />

            {movie.loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="flex flex-wrap gap-4">
                {
                    movie.movie.map((item, index) => (
                        <div key={index} className="card drop-shadow-2xl mb-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
                            <img
                            src={item.Poster}
                            alt="Movie-Poster"
                            className=" w-[15.4em] h-[18.5em] rounded-md bg-gradient-to-b from-black from-2% via-black via-18% to-black to-80%"
                            />
                            <div className="absolute mt-[-4em] mx-3">
                                <p className="truncate text-2xl pb-1">{item.Title}</p>
                                <div className="flex flex-row">
                                    <img src="images/star.png" alt="ratings" className="w-[1.2em] h-[1.2em]" />
                                    <p className="font-normal text-base mx-1">{item.Year}</p>
                                    <p className="mx-2 font-extralight text-base">&#10072;</p>
                                    <p className="font-extralight text-base">{item.Type}</p>
                                </div>
                            </div>
                        </div>
                        
        
                    ))
                }
                </div>
            )}
            

        </section>
    );
}

export default TextBody;

// <Card
//     imageUrl="https://i.pinimg.com/originals/34/e8/22/34e822fc1ee9f31dde89ddbe043f7c1b.jpg"
//     title="Naruto"
//     rating="4.6"
//     genre="Anime"
// />
// <Card
//     imageUrl="https://i.pinimg.com/originals/34/e8/22/34e822fc1ee9f31dde89ddbe043f7c1b.jpg"
//     title="Naruto"
//     rating="4.6"
//     genre="Anime"
// />