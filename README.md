# Assignment 1 - ReactJS app.

Name: Yannan Qian

## Features.
 
 + Feature 1 - Watch List 
 + Feature 2 - Now playing movies and top rated movies
 + Feature 3 - Latest movie, including a loading page
 + Feature 4 - Drawer navigations
 + Feature 5 - Related movies 

## Setup requirements (If required).
 + Semantic UI React (npm install semantic-ui-react semantic-ui-css)
 + Material-UI (npm install @material-ui/core, npm install @material-ui/icons)


## API Data Model.
+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/discover/movie - get a list of movies
+ https://api.themoviedb.org/3/movie/upcoming - get a list of upcoming movies
+ https://api.themoviedb.org/3/movie/top_rated - get a list of top rated movies
+ https://api.themoviedb.org/3/movie/now_playing - get a list of playing movies
+ https://api.themoviedb.org/3/movie/latest - get the latest movies
+ https://api.themoviedb.org/3/movie/{movie_id}/similar - get similar movies of a specific movie

## App Design.

### Component catalogue (If required).

![][stories]

### UI Design.

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

![][drawer]
>A drawer navigation board to make the header neater.

![][latestPage]
>The page shown when fetching the latest movie.

![][similarMovie]
>Shows similar movies of a specific movie.

## Routing.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /reviews/form (public)- the form to submit a review
+ /movies/nowPlaying (public)- displays now playing movies.
+ /movies/latest (public)- displays loading page before the latest movie's detail.
+ /movies/topRated (public)- displays top rated movies.
+ /movies/upcoming (public)- displays upcoming movies.
+ /movies/watchlist (protected) - displays the user's watch list.
+ /movies/:id (public) - displays a movie's details.
+ /movies/:id/similar (public) - similar movies of a particular movie.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
> Clicking the 'Full Review' for a review extract will display the full text of the review.

![][NowplayingPage]
> Clicking the 'Details' button causes the display of that movie's details.

![][Top-ratedPage]
> Clicking the 'Details' button causes the display of that movie's details.

![][latestPage]
> Redirecting to the latest movie's detail automatically.

![][SimilarMoviesButton]
> Clicking the 'SimilarMovies' button causes the display of that movie's similar movies page.

![][SimilarMoviesPage]
> Clicking the 'Details' button causes the display of that movie's details.

## Independent learning (If relevant).
+ Material-UI drawer, icons and styles (/src/components/UICoponents/...) https://material-ui.com/...
+ Semantic UI React loader and several other components not used(/src/components/UICoponents/Loader) https://react.semantic-ui.com/...
+ Some CSS knowledge, https://www.w3schools.com/...
+ React router, https://reactrouter.com/web/api/withRouter


---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Yannan Qian

## App Features.

+ Movie filter - Allows user can filter movie by title or genres.

Tests: cypress/integration/home-page.spec.js 

![][filter]

+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

Tests: cypress/integration/movieDetails-page.spec.js 

![][movieDetail]

+ Movie Review page: Displays the full text of a movie review.

Tests: cypress/integration/movieReviewPage.spec.js 

![][review]

+ Upcoming page - Shows upcoming movies. The Add to watchlist button add the movie to watch list.

Tests: cypress/integration/navigation.spec.js, cypress/integration/movieCardLogic.spec.js

![][upcomingPage]

+ WatchList page - Shows movies in watch list. The Remove from watchlist button remove the movie out of watch list, and add it back to upcoming page.

Tests: cypress/integration/navigation.spec.js, cypress/integration/movieCardLogic.spec.js

![][watchListPage]

+ Top-rated page - Shows top rated movies. The details button navigates to the movie's detail page.

Tests: cypress/integration/navigation.spec.js

![][Top-ratedPage]

+ Nowplaying page - Shows now playing movies. The details button navigates to the movie's detail page.

Tests: cypress/integration/navigation.spec.js

![][NowplayingPage]

+ Latest page - Shows the loading page, and it will redirect to the latest movie's detail automatically.

Tests: cypress/integration/navigation.spec.js

![][latestPage]

+ Site header and drawer navigation - A drawer navigation board contains most other pages' links.

Tests: cypress/integration/navigation.spec.js

![][drawer]

+ SimilarMovie page - Shows similar movies of one particular movie. The details button navigates to the movie's detail page.

Tests: cypress/integration/navigation.spec.js

![][SimilarMoviesButton]
![][SimilarMoviesPage]

## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/projects/va6ek6/

Some tests in CI may fail because of issues of ordinary web servers. It works well in local cypress. I've succeeded avoiding this but that made the code messy and hard to read. I kept the original code at last.
Local cypress tests screenshots below:
![][home-pageTests]
![][movieDetails-pageTests]
![][movieCardLogicTests]
![][movieReviewPageTests]
![][navigationTests]

### Advanced Testing.

+ cypress/integration/movieReviewPage.spec.js - test the movieReview page when the Review id is invalid. 
+ cypress/integration/movieDetails-page.spec.js - test when a movie has no reviews.
+ cypress/integration/movieDetails-page.spec.js - test the movieDetailsPage when the Movie id is invalid.
+ cypress/integration/navigation.spec.js - test the similarMoviePage when a movie has no similar movies.


---------------------------------

[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
[drawer]:
[latestPage]:
[similarMovie]:
[Top-ratedPage]
[upcomingPage]:
[watchListPage]:
[SimilarMoviesButton]:
[SimilarMoviesPage]:
[NowplayingPage]:
[home-pageTests]:
[movieDetails-pageTests]:
[movieCardLogicTests]:
[movieReviewPageTests]:
[navigationTests]: