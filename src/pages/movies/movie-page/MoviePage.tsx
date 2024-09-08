import { Link, useParams } from "react-router-dom";
import { movieApi } from "@models/movie/movieAPI.ts";
import { Loader } from "@components/loader/Loader.tsx";
import { isMovie, Movie, movieTypeMapper } from "@models/movie/types.ts";
import cl from "./MoviePage.module.scss";
import { RatingTable } from "@pages/movies/movie-page/RatingTable.tsx";
import { errorMessage } from "@utils/constants.ts";
import { MovieCard } from "@pages/movies/MovieCard.tsx";

const MoviePage = () => {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, isError } = movieApi.useGetMovieQuery(id as string);

  const movie = isMovie(data) ? data : null;

  return (
    <section className={cl.movie_page}>
      {movie && (
        <div className={cl.movie_page__inner}>
          <h1 className={cl.movie_page__title}>{movie.name}</h1>
          <div className={cl.movie_page__body}>
            <img
              src={movie.poster.url}
              alt={""}
              className={cl.movie_page__poster}
            />
            <div className={cl.movie_page__info}>
              <div>
                <h2 className={cl.movie_page__subtitle}>Описание</h2>
                <p className={cl.movie_page__desc}>{movie.description}</p>
              </div>
              <div>
                <h2 className={cl.movie_page__subtitle}>Другое название</h2>
                <div>{movie.alternativeName}</div>
              </div>

              <div>
                <h2 className={cl.movie_page__subtitle}>Год</h2>
                <div>{movie.year}</div>
              </div>

              <div>
                <h2 className={cl.movie_page__subtitle}>Длительность</h2>
                <div>{movie.movieLength} минут</div>
              </div>

              <div>
                <h2 className={cl.movie_page__subtitle}>Тип</h2>
                <div>{movieTypeMapper(movie.type)}</div>
              </div>

              <div>
                <h2 className={cl.movie_page__subtitle}>
                  Возрастное ограничение
                </h2>
                <div>{movie.ageRating}+ лет</div>
              </div>

              <div>
                <h2 className={cl.movie_page__subtitle}>
                  Возрастное ограничение
                </h2>
                <div>{movie.ageRating}+ лет</div>
              </div>

              <div>
                <h2 className={cl.movie_page__subtitle}>Слоган</h2>
                <div>{movie.slogan}</div>
              </div>

              <div className={cl.movie_page__genres}>
                {" "}
                <h2 className={cl.movie_page__subtitle}>Жанр</h2>
                <ul className={cl.movie_page__genres_list}>
                  {movie.genres.map((genre) => (
                    <li key={genre.name} className={cl.movie_page__genres_item}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className={cl.movie_page__subtitle}>Рейтинг</h2>
                <RatingTable rating={movie.rating} />
              </div>
            </div>
          </div>
          <div className={cl.movie_page__extra}>
            <div className={cl.movie_page__extra_films}>
              {movie.similarMovies && (
                <>
                  <h2 className={cl.movie_page__subtitle}>Похожие фильмы</h2>
                  <ul className={cl.movie_page__extra_films_list}>
                    {movie.similarMovies
                      .filter((film) => film.id && film.name)
                      .map((similarMovie, index) => (
                        <li key={index}>
                          <MovieCard
                            id={similarMovie.id}
                            rating={similarMovie?.rating?.kp}
                            previewUrl={similarMovie.poster.previewUrl}
                          />
                        </li>
                      ))}

                    <li className={cl.movie_page__extra_films_item}></li>
                  </ul>
                </>
              )}
            </div>
            <div className={cl.movie_page__extra_actors}>
              <h2 className={cl.movie_page__subtitle}>Актеры</h2>
              <ul className={cl.movie_page__extra_actors_list}>
                {movie.persons
                  .filter((person) => person && person.name && person.id)
                  .map((person, index) => (
                    <li
                      className={cl.movie_page__extra_actors_item}
                      key={index}
                    >
                      <Link to={`/actor/${person.id}`} key={person.id}>
                        {person.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {isLoading && <Loader className={cl.movie_page__loader} />}
      {isError && <h1 className={cl.movie_page__error}>{errorMessage}</h1>}
    </section>
  );
};

export { MoviePage };
