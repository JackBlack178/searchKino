import { Link } from "react-router-dom";
import cl from "./MovieCard.module.scss";
import clsx from "clsx";
import { FC } from "react";
import { highRating, mediumRating } from "@utils/constants.ts";

interface MovieCardProps {
  id: string;
  rating?: string;
  previewUrl: string;
}

const MovieCard: FC<MovieCardProps> = ({ id, rating, previewUrl }) => {
  return (
    <div className={cl.movie__wrapper}>
      <Link to={`/movies/${id}`} className={cl.movie}>
        <img
          src={previewUrl}
          alt={""}
          data-rating={rating}
          className={cl.movie__img}
        />
      </Link>
      <div
        className={
          rating &&
          clsx(
            cl.movie__rating,
            +rating > highRating && cl.movie__high_rating,
            +rating < highRating &&
              +rating > mediumRating &&
              cl.movie__medium_rating,
            +rating < mediumRating && cl.movie__low_rating,
          )
        }
      >
        {rating}
      </div>
    </div>
  );
};

export { MovieCard };
