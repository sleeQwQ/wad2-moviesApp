export const getMovies = () => {
  return fetch(
    '/api/movies',{headers:{
      'Authorization': window.localStorage.getItem('token') 
    },
    method:'get',
    }
  )
    .then(res => res.json())
    //.then(json => json.results);
};
  
  export const getMovie = id => {
    return fetch(
      `/api/movies/${id}`,{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
      method:'get',
      }
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      '/api/genres',{
      method:'get',
      }
    )
      .then(res => res.json())
      //.then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      `/api/movies/${id}/reviews`,{
      method:'get',
      }
    )
      .then(res => res.json())
      //.then(json => json.results);
  };

  export const getUpcomingMovies = () => {
    return fetch(
      '/api/upcoming',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
      method:'get',
      }
    )
      .then(res => res.json())
      //.then(json => json.results);
  };

  export const getLatestMovie = () => {
    return fetch(
      '/api/latest',{
      method:'get',
      }
    )
      .then(res => res.json());
  };

  export const getPlayingMovies = () => {
    return fetch(
      '/api/nowplaying',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
      method:'get',
      }
    )
      .then(res => res.json())
      //.then(json => json.results);
  };

  export const getTopRated = () => {
    return fetch(
      '/api/toprated',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
      method:'get',
      }
    )
      .then(res => res.json())
      //.then(json => json.results);
  };

  export const getSimilarMovies = id => {
    return fetch(
      `/api/movies/${id}/similars`,{
      method:'get',
      }
    )
      .then(res => res.json())
      //.then(json => json.results);
  };