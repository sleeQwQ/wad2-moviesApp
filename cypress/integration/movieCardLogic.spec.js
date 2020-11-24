let movies;
let upcoming;
describe("MovieCardLogic", () => {
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
    });
  
    describe("Favourite button", () => {
      beforeEach(() => {
        cy.visit("/");
      });
      it("should remove the film from home page after add to favourite", () => {
        cy.get(".card").eq(0).find(".card-title").should("have.text",movies[0].title);
        cy.get(".card").eq(0).find("button").click();
        cy.get(".card").eq(0).find(".card-title").should("not.have.text",movies[0].title);
      });
      it("should display the film in the favourite page", () => {
        cy.get(".card").eq(0).find("button").click();
        cy.get("nav").find("li").eq(2).find("a").click();
        cy.get(".card").eq(0).find(".card-title").should("have.text",movies[0].title);
      });
    });
    describe("Watch List buttons", () => {
        beforeEach(() => {
          cy.visit("/movies/upcoming");
        });
        it("should remove the film from upcoming page after add to watch list", () => {
          cy.get(".card").eq(0).find(".card-title").should("have.text",upcoming[0].title);
          cy.get(".card").eq(0).find("button").click();
          cy.get(".card").eq(0).find(".card-title").should("not.have.text",upcoming[0].title);
        });
        it("should display the film in the watch list page", () => {
          cy.get(".card").eq(0).find("button").click();
          cy.get("nav").find("li").eq(3).find("a").click();
          cy.get(".card").eq(0).find(".card-title").should("have.text",upcoming[0].title);
        });
        it("should remove the film from watch list page after removed", () => {
          cy.get(".card").eq(0).find("button").click();
          cy.get(".card").eq(1).find("button").click();
          cy.get("nav").find("li").eq(3).find("a").click();
          cy.get(".card").eq(0).find("button").click();
          cy.get(".card").eq(0).find(".card-title").should("not.have.text",upcoming[0].title);
        });
        it("should return the film in upcoming page after removed from watch list", () => {
          cy.get(".card").eq(0).find("button").click();
          cy.get("nav").find("li").eq(3).find("a").click();
          cy.get(".card").eq(0).find("button").click();
          cy.get("nav").find("li").eq(1).find("a").click();
          cy.get(".card").eq(0).find(".card-title").should("have.text",upcoming[0].title);
        });
      });
});