import { IMovieCard } from "@/shared/models/interfaces";
import { FC } from "react";
import Image from "next/image";
import styles from "../../styles/MovieCard.module.scss";
const MovieCard: FC<IMovieCard> = (props) => {
  //baseUrl can change in the future, dependable on API call configuration.
  const baseUrl = `http://image.tmdb.org/t/p/w300`;

  return (
    <div className={styles.movie_card}>
      <h1>{props.title}</h1>
      <Image
        className={styles.image}
        src={`${baseUrl}` + `${props.imageSource}`}
        alt="Movie poster Image"
        width={200}
        height={250}
      />
      <div>
        <p>The rating is {props.rating}</p>
      </div>
      <div>{/* adding comment section later */}</div>
    </div>
  );
};

export default MovieCard;
