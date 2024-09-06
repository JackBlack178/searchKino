import { useParams } from "react-router-dom";

const MoviePage = () => {
  const params = useParams();

  return (
    <div>
      <h1>Movie page with data {JSON.stringify(params)}</h1>
    </div>
  );
};

export { MoviePage };
