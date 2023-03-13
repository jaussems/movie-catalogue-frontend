import Head from "next/head";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import NavBar from "@/components/navbar/NavBar";
import Spinner from "@/components/spinner/Spinner";
import clsx from "clsx";

import MovieCard from "@/components/moviecard/MovieCard";

const inter = Inter({ subsets: ["latin"] });

const fetchMovieListData = async () => {
  const response = await fetch(
    `${process.env.API_BASE_URL}3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=12`
  );

  return response.json();
};
export async function getStaticProps() {
  const apiData = await fetchMovieListData();

  return {
    props: {
      apiData,
    },
  };
}

export default function Home({ apiData }: any) {
  const [isLoading, setIsLoading] = useState(true);

  //testing Animation level,
  const [activateAnimation, setActivateAnimation] = useState(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  setTimeout(() => {
    setActivateAnimation(true);
  }, 2500);

  return (
    <>
      <Head>
        <title>Movie Catalogue App</title>
        <meta
          name="description"
          content="NextJs App where you can track your favorite movies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar></NavBar>
        {!isLoading ? (
          <div
            className={clsx({
              [styles.movie_list]: true,
              [styles["movie_list-hidden"]]: !activateAnimation,
              [styles["movie_list-shown"]]: activateAnimation,
            })}
          >
            {apiData.results.map((movie: any) => {
              return (
                <div key={movie.id}>
                  <MovieCard
                    title={movie.title}
                    imageSource={movie.poster_path}
                    rating={movie.vote_average}
                  ></MovieCard>
                </div>
              );
            })}
          </div>
        ) : (
          <Spinner></Spinner>
        )}
      </main>
    </>
  );
}
