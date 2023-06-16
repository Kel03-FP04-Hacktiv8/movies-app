import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadingText from "../atoms/HeadingText";
import { getMovie } from "../store/reducer/movie";
import Card from "../atoms/Card";
import Header from "../templates/Header";

const HomePages = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movie.movies);
    const {isLoading} = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(getMovie("barbie"));
    }, [dispatch]);
    

    return(
        <>
        <Header />

        <section className="container-fluid mx-11 mt-12 font-bold text-lg">
            <HeadingText />

            {isLoading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="flex flex-wrap gap-4">
                {
                    movies.Search?.map((item, index) => (
                        <Card
                            imageUrl={item.Poster}
                            key={index}
                            title={item.Title}
                            year={item.Year}
                            genre={item.Type}
                            id={item.imdbID}
                        />
        
                    ))
                }
                </div>
            )}
            

        </section>
        </>
    );
}

export default HomePages;

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