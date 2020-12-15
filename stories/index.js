/* eslint-disable no-lone-blocks */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Link, BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import AddToFavoritesButton from "../src/components/buttons/addToFavorites";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import AddToWatchListButton from "../src/components/buttons/addToWatchList";
import DetailsButton from "../src/components/buttons/detailsButton";
import AddReviewButton from '../src/components/buttons/addReview';
import RemoveFromWatchListButton from '../src/components/buttons/removeFromWatchList';
import LoaderIcon from "../src/components/UIComponents/Loader";
import SimilarMoviesButton from '../src/components/buttons/similatMoviesButton';
import { excerpt } from "../src/util";
import Drawer from "../src/components/UIComponents/drawerNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  reviews: [
    {
      id: '5a43b0320e0a264f7704e83a',
      author: 'Per Gunnar Jonsson',
      content: 'My oldest son, as well as myself of course, wanted to watch this movie already before Christmas when it went up Geneva but it was pretty much sold out (unless you wanted to sit at the very edge of the theatre). I manage to book tickets for yesterday though so…here’s my ramblings about the movie. As usual with these kind of movies, where there is a large following of fans, there is also many dissenting voices. Some people apparently are going as far as to want this movie to be undone. Well, my take on that is that these people need to grow up or let go or both. Luke is no longer a young farm boy running around saving the universe. The Star Wars universe and its characters are evolving and that is the way it should be and the way it is. Time for the next generation to pick up the torch. Both me and my son really liked this movie. After the abysmal episodes I to III (Jar Jar Binks still haunts me in my dreams) I have really enjoyed the Star Wars movies. I quite liked The Force Awakens but it is true that it felt a bit like a rehash of A New Hope. Not only does this one not feel like it is reusing old material (too much) but it also feels like it is opening a new chapter in the Star Wars universe. The FX is as good as you have the right to expect from a Star Wars movie. The story is fresh and well developed. It will not win any Oscars of course but I liked it. It makes things evolve while at the same time giving enough room for action and a wee bit of humor. The characters are almost all good and well played. I am looking forward to seeing more of most of them, especially, Rey and Poe. I’m not 100% convinced about Finn and Rose but I can live with them. Kylo Ren do not yet fill up the shoes of Darth Vader but he is showing promise. Contrary to Snoke I do feel he should put on a mask though. The two characters I did not really like was General Hux and DJ. The first one was just incompetent. I’m not sure if he was supposed to be a bit of comical relief or not but, as far as I am concerned, we can do without him. DJ, well I guess he was supposed to not be liked so he did a good job of that but these kinds of assholes just frustrate me to no end. We never saw him actually meet his demise in this movie so if he is brought back I hope it will be for the sole purpose of rectifying that oversight…as violently and painfully as possible. Of course, we saw a few new ships as well and as usual with the Empire bigger is better…or maybe not. Not sure what to say about these new designs. At least they did not look like a enlarged (except for the bridge) Star Destroyer like Darth Vader’s Super Star Destroyer. One thing that really bugged me in the first battle though was the rebels’ so called “bombers”. What kind of bloody moron designed those? They were just so wrong in so many ways. The design itself was just silly looking. They were slower than a flee on a patch of tar. Seriously, a space bomber that crawls along? Actually, why make a “bomber” in space at all? That brings us to the biggest gripe of them all with this ludicrous design…dropping bombs vertically? In space? How the fuck do they fall? Sure they looked somewhat cool when they dropped their bombs…if your knowledge of physics is on the level of your average politician (and obviously a few Hollywood employees as well). Anyway, on the whole me and my son had two and a half hours of great fun watching The Last Jedi. I hope the next movie expands on the threads this one started. I have to say that I was a bit sorry about the feeble state of the resistance at the end, so I do hope the next writer will not let this drag on. One way to ruin Star Wars for me would be to turn Star Wars into some Battlestar Galactica variant with resistance survivors on constant run from the empire. Now it is time for the resistance to strike back, and for Rey to evolve her Jedi powers.'
    },
    {
      id: '5a3d22cd0e0a264cbe2375e7',
      author: 'Weedinator',
      content: `I got so high before going in to see "The Last Jedi" it's a wonder I figured out how to get into the theater. We started rocking the shatter bong hardcore, just pump it, pump it, till you can actually feel your brain melting, then hit that nail and do it again and again. At some point somebody asked the question "where are we?" and while I was reflecting philosophically on the matter, somebody else pointed out that we were parked in a lot by the cineplex and we slowly realized that we were here to see 'The Last Jedi'! I could barely function at all, so I went to my old go-to routine of donning dark glasses and a white cane to help disguise my complete stonification by pretending I was just some poor blind guy stumbling around and knocking things over. I usually do this to get past security at rock concerts and it never crossed my mind that a blind guy wouldn't be able to see a movie in the first place, but it worked anyway and soon enough we were in our seats. There were these fucking kids sitting right behind us and they kept kicking my seat like little retards, kicking, kicking, kicking.... so I took the lid off my extra-large Coke and just tossed it over my shoulder. Bingo! Direct hit! The little creeps shuffled off all pissed and whining, covered in sticky cola, us laughing at them, calling them losers, it was great! Then the movie started. The sound was awesome and everything but the screen was pretty freakin' dark I thought, could hardly make out anything. I started chanting "Turn up the brightness! Turn up the brightness!", expecting the rest of the audience to join in to my righteous chant of outrage, but then I realized I still had my Blind Guy Glasses on. Took 'em off and yup, cleared right up. There was some kind of big space battle going on so we took out our vape pens and started hoofing back lungfuls of sweet sweet shatter vapor. My girlfriend started texting me, bitching at me to pick her up some vag pads on the way home. WTF?? Get up off your fat ass and get 'em yourself I texted back. A barrage of bitchtexts followed, I was a jerk, I was an asshole and bla bla bla... I took a picture of my bare ass and sent it to her as a reply, fuckin bitch, anyway, apparently, this was considered 'indecent exposure' according to the usher-dork who wouldn't shut up about it so we had to leave the movie. We saw those stupid kids in the lobby as we were being escorted out, laughing at US, calling US 'losers'... I wanted to get back at them when they came out, even formed this elaborate plan where we would swoop down on them and soak them with freezing water this time, but we ended up just getting high again then went to Burger King.`
    }
  ],
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

//global components
{
  storiesOf("Site Header/Overall", module).add("default", () => (
    <BrowserRouter>
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
              <Drawer />
          </li>
        </ul>
      </nav>
    </nav>
    </BrowserRouter>
  ));

  storiesOf("Site Header/Drawer", module)
    .addDecorator(story => (
      <GenresContextProvider>{story()}</GenresContextProvider>
    ))
    .add("default", () => (
      <BrowserRouter>
        <Drawer/> 
      </BrowserRouter>         
    ));

  
}

//home page
{
  storiesOf("Home Page/MovieCard", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => (
      <MovieCard
        movie={sample}
        action={movie => <AddToFavoritesButton movie={movie} />}
      />
    ))
    .add("exception", () => {
      const sampleNoPoster = { ...sample, poster_path: undefined };
      return (
        <MovieCard
          movie={sampleNoPoster}
          action={movie => (
            <AddToFavoritesButton movie={movie} />
          )}
        />
      );
    });

  storiesOf("Home Page/FilterControls", module)
    .addDecorator(story => (
      <GenresContextProvider>{story()}</GenresContextProvider>
    ))
    .add("default", () => (
      <FilterControls onUserInput={action("button-click")} numMovies={10} />
    ));

  storiesOf("Home Page/Header", module).add("default", () => (
    <MoviesHeader title="No. Movies" numMovies={5} />
  ));

  storiesOf("Home Page/MovieList", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => {
      const movies = [sample, sample, sample, sample, sample];
      return (
        <MovieList
          movies={movies}
          action={movie => (
            <AddToFavoritesButton movie={movie} />
          )}
        />
      );
    });
}

//upcoming page
{
  storiesOf("Upcoming Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <AddToWatchListButton movie={movie} />}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <AddToWatchListButton movie={movie} />
        )}
      />
    );
  });

  storiesOf("Upcoming Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

  storiesOf("Upcoming Page/Header", module).add("default", () => (
    <MoviesHeader title="Upcoming Movies" numMovies={5} />
  ));

  storiesOf("Upcoming Page/MovieList", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => {
      const movies = [sample, sample, sample, sample, sample];
      return (
        <MovieList
          movies={movies}
          action={movie => (
            <AddToWatchListButton movie={movie} />
          )}
        />
      );
    });
}

//now playing page
{
  storiesOf("Now Playing Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <DetailsButton movie={movie} />}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <DetailsButton movie={movie} />
        )}
      />
    );
  });

  storiesOf("Now Playing Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

  storiesOf("Now Playing Page/Header", module).add("default", () => (
    <MoviesHeader title="Now Playing Movies" numMovies={5} />
  ));

  storiesOf("Now Playing Page/MovieList", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => {
      const movies = [sample, sample, sample, sample, sample];
      return (
        <MovieList
          movies={movies}
          action={movie => (
            <DetailsButton movie={movie} />
          )}
        />
      );
    });
}

//top-rated page
{
  storiesOf("Top-rated Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <DetailsButton movie={movie} />}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <DetailsButton movie={movie} />
        )}
      />
    );
  });

  storiesOf("Top-rated Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));
  
  storiesOf("Top-rated Page/Header", module).add("default", () => (
    <MoviesHeader title="Top Rated Movies" numMovies={5} />
  ));
  
  storiesOf("Top-rated Page/MovieList", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => {
      const movies = [sample, sample, sample, sample, sample];
      return (
        <MovieList
          movies={movies}
          action={movie => (
            <DetailsButton movie={movie} />
          )}
        />
      );
    });
}

//favourite page
{
  storiesOf("Favourite Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <AddReviewButton movie={movie} />}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <AddReviewButton movie={movie} />
        )}
      />
    );
  });

  storiesOf("Favourite Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));
  
  storiesOf("Favourite Page/Header", module).add("default", () => (
    <MoviesHeader title="Favorite Movies" numMovies={5} />
  ));
  
  storiesOf("Favourite Page/MovieList", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => {
      const movies = [sample, sample, sample, sample, sample];
      return (
        <MovieList
          movies={movies}
          action={movie => (
            <AddReviewButton movie={movie} />
          )}
        />
      );
    });
}

//watch list page
{
  storiesOf("Watch List Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <RemoveFromWatchListButton movie={movie} />}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <RemoveFromWatchListButton movie={movie} />
        )}
      />
    );
  });

  storiesOf("Watch List Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));
  
  storiesOf("Watch List Page/Header", module).add("default", () => (
    <MoviesHeader title="Watch List" numMovies={5} />
  ));
  
  storiesOf("Watch List Page/MovieList", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => {
      const movies = [sample, sample, sample, sample, sample];
      return (
        <MovieList
          movies={movies}
          action={movie => (
            <RemoveFromWatchListButton movie={movie} />
          )}
        />
      );
    });
}

//similar movies page
{
  storiesOf("Similar Movies Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <DetailsButton movie={movie} />}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <DetailsButton movie={movie} />
        )}
      />
    );
  });

  storiesOf("Similar Movies Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));
  
  storiesOf("Similar Movies Page/Header", module).add("default", () => (
    <MoviesHeader title="Similar Movies of ……" numMovies={5} />
  ));
  
  storiesOf("Similar Movies Page/MovieList", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => {
      const movies = [sample, sample, sample, sample, sample];
      return (
        <MovieList
          movies={movies}
          action={movie => (
            <DetailsButton movie={movie} />
          )}
        />
      );
    });
}

//latest movie page
storiesOf("Latest Movie Page", module).add("default", () => (
  <div align="center">
    <h2 align="center">Fetching Latest Movie……</h2>   
    <LoaderIcon></LoaderIcon>
  </div>
));

//movie details page
{
  storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
    <MovieDetails movie={sample} />
  ));

  storiesOf("Movie Details Page/MovieHeader", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => <MovieHeader movie={sample} />);

  storiesOf("Movie Details Page/ReviewsButton", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default (hiden)", () => (
      <Link
        className="btn btn-primary btn-block active"
        to={`/movies/${sample.id}/reviews`}
      >
      Show Reviews (Extracts)
      </Link>))
    .add("showing", () => (
      <Link
        className="btn btn-primary btn-block active"
        to={`/movies/${sample.id}`}
      >
        Hide Reviews 
      </Link>));
  
  storiesOf("Movie Details Page/SimilarMoviesButton", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => <SimilarMoviesButton movie={sample} />);

  storiesOf("Movie Details Page/ReviewsTable", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => (
      <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {sample.reviews.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.author}</td>
                <td>{excerpt(r.content)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/reviews/${r.id}`,
                      state: {
                        review: r,
                        movie: sample
                      }
                    }}
                  >
                    Full Review
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>));
}

//review page
{
  storiesOf("Review Page/ReviewDetails", module).add("default", () => (
    <>
      <p>Review By: {sample.reviews[0].author} </p>
      <p>{sample.reviews[0].content} </p>
    </>
  ));

  storiesOf("Review Page/MovieHeader", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => <MovieHeader movie={sample} />);
}

//add review page
{
  storiesOf("Add Review Page/ReviewDetails", module).add("default", () => (
    <form className="form bg-dark text-light">
      <h3>Add your review</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          defaultValue={sample.review ? sample.review.author : ""}
          name="author"
        />
      </div>
      {<p className=" text-white">{} </p>}
      <div className="form-group">
        <textarea
          rows="10"
          type="text"
          className="form-control"
          placeholder="Write your review"
          defaultValue={sample.review ? sample.review.content : ""}
          name="content"
        />
      </div>
      {(
        <p className="text-white">{} </p>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button type="reset" className="btn btn-primary reset">
        Reset
      </button>
    </form>
  ));

  storiesOf("Add Review Page/MovieHeader", module)
    .addDecorator(story => (
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => <MovieHeader movie={sample} />);
}

//error page
storiesOf("Error Page", module).add("default", () => (
  <div align="center">
    <h1 align="center">Something Wrong……</h1>   
    <h2 align="center">Return Main Page Soon……</h2>
  </div>
));


