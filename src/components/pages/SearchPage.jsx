import { Navbar } from "../molecules/Navbar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie } from "../store/reducer/movie";
import Card from "../atoms/Card";

const SearchPage = () => {

    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movie.movies);
    const { query } = useParams();
  
    useEffect(() => {
      dispatch(getMovie(query));
    }, [dispatch, query]);

    return(
        <>
        <div className="pt-2 mx-9">
            <Navbar />
        
        <section className="container-fluid mx-11 mt-12 font-bold text-lg">

        {movies.isLoading ? (
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
        </div>
        </>
    )
}

export default SearchPage;