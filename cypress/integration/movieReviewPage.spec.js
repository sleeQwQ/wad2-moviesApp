const movieId = 497582;
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
      cy.contains("Show Reviews").click();
      cy.wait(500);
      cy.get("table").contains("Full Review").eq(0).click();
    });
    
    it("should display movie title in the page header", () => {
      cy.get("h2").contains(movie.title);
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

    it("should display the review author", () => {
        cy.get("p").contains(`Review By: ${reviews[0].author}`);
    });

    // it("should display the review content", () => {
    //     cy.get("p").contains(reviews[0].content.replace(/[\r\n]/g," "));
    // });
  });

  describe("Invaild Movie Id", () => {
    beforeEach(() => {
      cy.visit(`/reviews/11111111111`);
    });

    it("should show the error page", () => {
      cy.url().should("include", `/error/2`);
      cy.get("h1").contains("Invaild Review Id");
      cy.get("h2").contains("Return Main Page Soon……");
    });

    it("should return the main page after 2 seconds", () => {
      cy.wait(2500);
      cy.url().should("not.include", `/movies`);
      cy.url().should("not.include", `/reviews`);
      cy.get("h2").contains("No. Movies");
    });
  });
});