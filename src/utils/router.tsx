import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { MainLayout } from "../components/main-layout/main-layout.tsx";
import { Home } from "../pages/Home/Home.tsx";
import { Movies } from "../pages/Movies/Movies.tsx";
import { Series } from "../pages/Series/Series.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
      </Route>
    </>,
  ),
);
