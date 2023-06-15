import Dashboard from "../pages/Dashboard";
import MovieList from "../pages/MovieList";
import PopularList from "../pages/PopularList";

const Routes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/movie-list", element: <MovieList /> },
  { path: "/popular-list", element: <PopularList /> },
];

export default Routes;
