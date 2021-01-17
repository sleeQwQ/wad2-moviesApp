import React, { lazy, Suspense  }  from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch/*, Link */} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SiteHeader from './components/siteHeader';
import PrivateRoute from "./components/privateRoute";
import AuthHeader from "./components/authHeader";
import AuthProvider from "./contexts/authContext";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";


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
const ErrorPage = lazy(() => import("./pages/errorPage"));
const SimilarMoviesPage = lazy(() => import("./pages/similarMoviePage"));
const LoginPage = lazy(() => import("./pages/loginPage"));
const SignUpPage = lazy(() => import("./pages/signUpPage"));

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
    <AuthProvider>
    <AuthHeader />
    <SiteHeader />      {/* New Header  */}
      <div className="container-fluid">
        <MoviesContextProvider>   
          <GenresContextProvider> 
          <Suspense fallback={<h1>Loading page....</h1>}>   
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />,
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/nowPlaying" component={NowplayingPage} />
              <Route exact path="/movies/latest" component={LatestPage} />
              <Route exact path="/movies/topRated" component={TopRatedPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <PrivateRoute exact path="/movies/watchlist" component={WatchListPage} />
              <Route exact path="/movies/:id/similar" component={SimilarMoviesPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/error/:id" component={ErrorPage} />
              <Route path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
          </GenresContextProvider> 
        </MoviesContextProvider>    
      </div>
      </AuthProvider>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));