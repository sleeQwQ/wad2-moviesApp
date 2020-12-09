import React, { lazy, Suspense  }  from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch/*, Link */} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import HomePage from "./pages/homePage";
// import MoviePage from './pages/movieDetailsPage'
// import FavoriteMoviesPage from './pages/favoritesMoviesPage'
// import WatchListPage from './pages/watchListPage'
// import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
// import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
// import AddMovieReviewPage from './pages/addMovieReviewPage';
// import NowplayingPage from './pages/nowPlayingPage';
// import LatestPage from './pages/latestPage';
// import TopRatedPage from './pages/topRatedPage';

const HomePage = lazy(() => import("./pages/homePage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoritesMoviesPage"));
const WatchListPage = lazy(() => import("./pages/watchListPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const UpcomingMoviesPage = lazy(() => import("./pages/upcomingMoviesPage"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const NowplayingPage = lazy(() => import("./pages/nowPlayingPage"));
const LatestPage = lazy(() => import("./pages/latestPage"));
const TopRatedPage = lazy(() => import("./pages/topRatedPage"));

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
    <SiteHeader />      {/* New Header  */}
      <div className="container-fluid">
        <MoviesContextProvider>   
          <GenresContextProvider> 
          <Suspense fallback={<h1>Loading page....</h1>}>   
            <Switch>
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/nowPlaying" component={NowplayingPage} />
              <Route exact path="/movies/latest" component={LatestPage} />
              <Route exact path="/movies/topRated" component={TopRatedPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/movies/watchlist" component={WatchListPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
          </GenresContextProvider> 
        </MoviesContextProvider>    
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));