import { IMovieCard } from "@/shared/models/interfaces";
import { FC } from "react";

const MovieCard: FC<IMovieCard> = (props) => {
  //baseUrl can change in the future, dependable on API call configuration.
  const baseUrl = `http://image.tmdb.org/t/p/`;

  return (
    <div>
      <h1>{props.title}</h1>
      <img src={`${baseUrl} + ${props.imageSource}`} />
      <div>
        <p>The rating is {props.rating}</p>
      </div>
      <div>{/* adding comment section later */}</div>
    </div>
  );
};

export default MovieCard;