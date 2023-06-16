import { Link } from "react-router-dom";

const Card = ({imageUrl, title, year, genre, key, id}) => {
    return(
        <Link to={`/detail/${id}`}>
        <div key={key} className="card drop-shadow-2xl mb-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
            <img
            src={imageUrl}
            alt="Movie-Poster"
            className=" w-[15.4em] h-[18.5em] rounded-md bg-gradient-to-b from-black from-2% via-black via-18% to-black to-80%"
            />
            <div className="absolute mt-[-4em] mx-3">
                <p className="truncate text-xl pb-1 w-64">{title}</p>
                <div className="flex flex-row">
                    <img src="/images/star.png" alt="ratings" className="w-[1.2em] h-[1.2em]" />
                    <p className="font-normal text-base mx-1">{year}</p>
                    <p className="mx-2 font-extralight text-base">&#10072;</p>
                    <p className="font-extralight text-base">{genre}</p>
                </div>
            </div>
        </div>
        </Link>

    );
}

export default Card;