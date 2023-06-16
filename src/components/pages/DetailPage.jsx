import { Navbar } from "../molecules/Navbar";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from "../store/reducer/movie";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailPage = () => {

    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movie.movies);
    const {isLoading} = useSelector((state) => state.movie);
    const { query } = useParams();

    useEffect(() => {
        dispatch(getDetail(query));
      }, [dispatch, query]);

    return(
        <>
        <div className="pt-2 mx-9">
        <Navbar />
        
        <section className="container-fluid mx-11 mt-12 font-bold text-lg">

            <div className="flex flex-wrap gap-4">
                {isLoading ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-center">
                            <img
                                className="w-full max-w-sm rounded-lg"
                                src={movies.Poster}
                                alt={movies.Title}
                            />
                        </div>

                        <div className="text-white">
                            <h1 className="text-3xl font-bold mb-2">{movies.Title}</h1>
                
                            <div className="mb-4">
                                <p className="text-xl mb-2">{movies.Type}</p> 
                                <p className="text-xl mb-2">{movies.Year}</p>
                            </div>

                            <div className="mb-4">
                                <div className="flex flex-row">
                                <span className="font-bold">Rating</span>
                                <img src="/images/star.png" alt="ratings" className="w-[1.2em] h-[1.2em]" />
                                    <p className="text-xl mb-24">{movies.imdbRating}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xl mb-2">Plot</p>
                                <p className="text-justify">{movies.Plot}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
        </div>
        </>

    )
}

export default DetailPage;