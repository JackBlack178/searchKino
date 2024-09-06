import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { MainLayout } from "../components/main-layout/main-layout.tsx";
import { Home } from "@pages/home/Home.tsx";
import { Movies } from "@pages/movies/Movies.tsx";
import { Series } from "@pages/series/Series.tsx";
import { Favorites } from "@pages/favorites/Favorites.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </>,
  ),
);
