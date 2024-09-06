import { Link } from "react-router-dom";
import cl from "./MovieCard.module.scss";
import clsx from "clsx";
import { FC } from "react";

const highRating = 8;
const mediumRating = 6;

interface MovieCardProps {
  id: string;
  rating: string;
  previewUrl: string;
}

const MovieCard: FC<MovieCardProps> = ({ id, rating, previewUrl }) => {
  return (
    <div className={cl.movie__wrapper}>
      <Link to={`movies/${id}`} className={cl.movie}>
        <img src={previewUrl} alt={""} data-rating={rating} />
      </Link>
      <div
        className={clsx(
          cl.movie__rating,
          rating > 8 && cl.movie__high_rating,
          rating < 8 && rating > 6 && cl.movie__medium_rating,
          rating < 6 && cl.movie__low_rating,
        )}
      >
        {rating}
      </div>
    </div>
  );
};

export { MovieCard };
