import axios from "axios";

const aw = () => {
    return axios.create({
      baseURL: 'https://api.themoviedb.org/3/movie',
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGViNDk3OTY4YzhiNjcwYWEyMmMyY2U2OGIxMzY0NyIsInN1YiI6IjY0ODk4NzhmZDJiMjA5MDBhZDNlYjdkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p5sSEx-XWYtUhVKIxgixAc9GIPTIzXA8DoVl3TwDtCo",
        accept: "application/json",
      },
    });
  };
  
  export { aw };