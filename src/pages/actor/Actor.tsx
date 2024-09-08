import cl from "./Actor.module.scss";
import { actorAPI } from "@models/actor/actorAPI.ts";
import { Link, useParams } from "react-router-dom";
import { Loader } from "@components/loader/Loader.tsx";
import { errorMessage } from "@utils/constants.ts";
import clsx from "clsx";
import { isActor } from "@models/actor/types.ts";

const Actor = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = actorAPI.useGetActorQuery(id as string);

  const actor = isActor(data) ? data : null;

  return (
    <section className={cl.actor}>
      {actor && (
        <>
          <h1 className={cl.actor__title}>{actor.name}</h1>
          <h2 className={cl.actor__subtitle}>Инфо</h2>
          <div className={cl.actor__inner}>
            <img
              src={
                actor.photo ||
                "https://i.pinimg.com/736x/77/fd/d9/77fdd932b551af58530f4144cf20e0cf.jpg"
              }
              alt={""}
              className={cl.actor__img}
            />

            <div className={cl.actor__body}>
              <div className={cl.actor__body_info}>
                <h3 className={cl.actor__body_subtitle}>Возраст</h3>
                {actor.age} лет
              </div>

              <div className={cl.actor__body_info}>
                <h3 className={cl.actor__body_subtitle}>День рождения</h3>
                {actor.birthday}
              </div>

              <div className={cl.actor__body_info}>
                <h3 className={cl.actor__body_subtitle}>Имя (en)</h3>
                {actor.enName}
              </div>

              <div className={cl.actor__body_info}>
                <h3 className={cl.actor__body_subtitle}>Рост</h3>
                {actor.growth} см
              </div>

              <div className={cl.actor__body_info}>
                <h3 className={cl.actor__body_subtitle}>М/Ж</h3>
                {actor.sex}
              </div>
            </div>
          </div>
          <div className={cl.actor__movies}>
            <h2 className={cl.actor__subtitle}>Фильмы</h2>
            <div className={cl.actor__movies_wrapper}>
              {actor.movies
                .filter((movie) => movie.name)
                .map((movie, index) => (
                  <div key={index} className={cl.actor__movies_item}>
                    <Link
                      to={`/movies/${movie.id}`}
                      className={clsx(cl.actor__movies_title)}
                    >
                      {index + 1}. {movie.name}
                    </Link>
                    <p>
                      Роль: {movie.general ? "Главная" : "Второстепенная"} (
                      {movie.rating} баллов на kp)
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}

      {isLoading && <Loader className={cl.actor__loader} />}
      {isError && <h2 className={cl.actor__error}>{errorMessage}</h2>}
    </section>
  );
};

export { Actor };
