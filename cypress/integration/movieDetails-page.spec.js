const movieId = 577922;
let movie;
let reviews;
describe("Movie Details Page", () => {
  before(() => {  
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
    .its("body")
    .then((movieDetails) => {
      movie = movieDetails;
    });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
  });
  describe("Normal Movie Details Page", () => {
    beforeEach(() => {
      cy.visit(`/movies/${movieId}`);
    });
    
    it("should display movie title in the page header", () => {
      cy.get("h2").contains(movie.title);
    });

    it("should display the movie's details", () => {
      cy.get("h4").contains("Overview");
      cy.get("h4").next().contains(movie.overview);
      cy.get("ul")
        .eq(1)
        .within(() => {
          cy.get("li").eq(0).contains("Runtime");
          cy.get("li").eq(1).contains(movie.runtime);
          cy.get("li").eq(2).contains("Release Date");
          cy.get("li").eq(3).contains(movie.release_date);
        });
    });

    it("should display the Home icon with the correct URL value", () => {
      cy.get(".fa-home")
        .parent()
        .should("have.attr", "href")
        .should("include", movie.homepage);
    });

    it("should display the correct poster", () => {
      cy.get("img")
        .should("have.attr","src")
        .should('include', movie.poster_path);
    });

    it("should dispaly its reviews", () => {
      cy.contains("Show Reviews").click();
      reviews.map(r => {
        cy.get("tbody").get("tr").get("td").contains(r.author);
      })
    });
  });
  describe("Movie with No Reviews", () => {
    beforeEach(() => {
      cy.visit(`/movies/590706`);
    });

    it("should show no review message", () => {
      cy.contains("Show Reviews").click();
      cy.get("text").contains("No Review This movie");
    });
  });

  describe("Invaild Movie Id", () => {
    beforeEach(() => {
      cy.visit(`/movies/11111111111`);
    });

    it("should show the error page", () => {
      cy.url().should("include", `/error/1`);
      cy.get("h1").contains("Invaild Movie Id");
      cy.get("h2").contains("Return Main Page Soon……");
    });

    it("should return the main page after 2 seconds", () => {
      cy.wait(2500);
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("No. Movies");
    });
  });
});