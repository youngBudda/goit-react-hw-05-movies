import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'beadd5552ffa27a188b2485110a0c16b',
  },
});

export const requestTrendingMovies = async () => {
  const { data } = await instance.get(`trending/movie/day`);
  return data;
};

export const requestFindingMovies = async q => {
  const { data } = await instance.get(`search/movie`, {
    params: {
      query: q,
      include_adult: true,
    },
  });
  return data;
};

export const requestMovieDetails = async id => {
  const { data } = await instance.get(`movie/${id}`);
  return data;
};

export const requestReview = async id => {
  const { data } = await instance.get(`movie/${id}/reviews`);
  return data;
};

export const requestCast = async id => {
  const { data } = await instance.get(`movie/${id}/credits`);
  return data;
};
