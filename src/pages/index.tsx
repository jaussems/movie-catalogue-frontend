import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import NavBar from "@/components/navbar/NavBar";
import { MovieList } from "@/shared/assets/dummydata";
import MovieCard from "@/components/moviecard/MovieCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dummyMovieList = MovieList;

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
        <div className={styles.movie_list}>
          {dummyMovieList.map((movie) => {
            return (
              <>
                <MovieCard
                  title={movie.title}
                  imageSource={movie.poster_path}
                  rating={movie.vote_average}
                ></MovieCard>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}
