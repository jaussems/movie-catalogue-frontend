import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import NavBar from "@/components/navbar/NavBar";
import MovieCard from "@/components/moviecard/MovieCard";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=12`
  );
  const apiData = await response.json();

  return {
    props: {
      apiData,
    },
  };
}

export default function Home({ apiData }: any) {
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
          {apiData.results.map((movie: any) => {
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
