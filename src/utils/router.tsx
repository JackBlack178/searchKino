import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { MainLayout } from "../components/main-layout/main-layout.tsx";
import { Home } from "@pages/home";
import { Movies } from "@pages/movies";
import { Series } from "@pages/series";
import { Favorites } from "@pages/favorites";
import { MoviePage } from "@pages/movies";
import { Actor } from "@pages/actor";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviePage />} />
        <Route path="actor/:id" element={<Actor />} />
        <Route path="series" element={<Series />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </>,
  ),
);
