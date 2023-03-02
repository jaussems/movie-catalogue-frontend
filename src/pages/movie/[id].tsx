import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (params) => {
  return {
    props: { id: {} },
  };
};

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const welcomeText = `Welcome to movie page ${id}`;

  return (
    <>
      <h1>{welcomeText}</h1>
    </>
  );
};

export default Movie;
