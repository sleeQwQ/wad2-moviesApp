let movies;
let upcoming;
const movieId = 577922; // Tenet movie id
let playing;
let topRated;
let latest;
let similar;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        upcoming = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        playing = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        topRated = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/latest?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US`
    )
      .its("body")
      .then((response) => {
        latest = response;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        similar = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Favorite Movies");
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Upcoming Movies");
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(4).find("a").click();
      cy.url().should("include", `/nowPlaying`);
      cy.get("h2").contains("Now Playing Movies");
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(5).find("a").click();
      cy.url().should("include", `/latest`);
      cy.get("h2").contains("Fetching Latest Movie……");
      cy.wait(3000);
      cy.get("nav").find("li").eq(0).find("a").click();
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(6).find("a").click();
      cy.url().should("include", `/topRated`);
      cy.get("h2").contains("Top Rated Movies");
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(7).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Upcoming Movies");
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(9).find("a").click();
      cy.url().should("include", `/watchlist`);
      cy.get("h2").contains("Watch List");
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(8).find("a").click();
      cy.get("nav.navbar-brand").find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("No. Movies");
    });
  });

  describe("From the Movie Details page ", () => {
    beforeEach(() => {
      cy.visit(`/movies/${movieId}`);
    });
    it("should change browser URL when show/hide reviews is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movieId}/reviews`);
      cy.contains("Hide Reviews").click();
      cy.url().should("not.include", `/movies/${movieId}/reviews`);
    });
    it("navigate to the full review page when a 'Full Review' link is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movieId}/reviews`);
      cy.contains("Full Review").click();
      cy.url().should("include", `/reviews/`);
    });
  });
  describe("From the Favorites page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(2).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
    });
  });
  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate from home page to movie details and back", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("No. Movies");
    });
    it("should navigate from favorites page to movie details and back", () => {
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("include", `movies/favorites`);
      cy.get("h2").contains("Favorite Movies");
    });
    it("should navigate from upcoming page to movie details and back", () => {
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${upcoming[0].id}`);
      cy.get("h2").contains(upcoming[0].title);
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("include", `movies/upcoming`);
      cy.get("h2").contains("Upcoming Movies");
    });
    it("should navigate from watch list page to movie details and back", () => {
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(9).find("a").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${upcoming[0].id}`);
      cy.get("h2").contains(upcoming[0].title);
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("include", `movies/watchlist`);
      cy.get("h2").contains("Watch List");
    });
    it("should navigate from now playing page to movie details and back", () => {
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(4).find("a").click();
      cy.get(".card").eq(0).find("button").click();
      cy.url().should("include", `/movies/${playing[0].id}`);
      cy.get("h2").contains(playing[0].title);
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("include", `movies/nowPlaying`);
      cy.get("h2").contains("Now Playing Movies");
    });
    it("should navigate from top rated page to movie details and back", () => {
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(6).find("a").click();
      cy.get(".card").eq(0).find("button").click();
      cy.url().should("include", `/movies/${topRated[0].id}`);
      cy.get("h2").contains(topRated[0].title);
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("include", `movies/topRated`);
      cy.get("h2").contains("Top Rated Movies");
    });
  });
  describe("From the Watch List page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(9).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${upcoming[0].id}`);
      cy.get("h2").contains(upcoming[0].title);
    });
  });
  describe("From the Now Playing page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(4).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${playing[0].id}`);
      cy.get("h2").contains(playing[0].title);
    });
    it("should navigate to the movies detail page when click on the button", () => {
      cy.get(".card").eq(0).find("button").click();
      cy.url().should("include", `/movies/${playing[0].id}`);
      cy.get("h2").contains(playing[0].title);
    });
  });
  describe("From the Top Rated page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(6).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${topRated[0].id}`);
      cy.get("h2").contains(topRated[0].title);
    });
    it("should navigate to the movies detail page when click on the button", () => {
      cy.get(".card").eq(0).find("button").click();
      cy.url().should("include", `/movies/${topRated[0].id}`);
      cy.get("h2").contains(topRated[0].title);
    });
  });
  describe("The Latest page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(3).find("Button").click();
      cy.get("div").find("li").eq(5).find("a").click();
    });
    it("should navigate to the latest movie's detail page and change the browser URL", () => {
      cy.wait(2000);
      cy.url().should("include", `/movies/${latest.id}`);
      cy.get("h2").contains(latest.title);
    });
  });
  describe("Similar Movie page", () => {
    beforeEach(() => {
      cy.visit(`/movies/${movieId}`);
      cy.contains("SimilarMovies").click();
    });
    it("should navigate to the similar movie page and change the browser URL", () => {
      cy.url().should("include", `/movies/${movieId}/similar`);
      cy.get("h2").contains("Similar Movies");
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${similar[0].id}`);
      cy.get("h2").contains(similar[0].title);
    });
    it("should navigate to the movies detail page when click on the button", () => {
      cy.get(".card").eq(0).find("button").click();
      cy.url().should("include", `/movies/${similar[0].id}`);
      cy.get("h2").contains(similar[0].title);
    });
  });
 });