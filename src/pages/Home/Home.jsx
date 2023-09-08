import { useEffect, useState } from 'react';
import { requestTrendingMovies } from 'services/api';
import { toast } from 'react-toastify';
import Notification from 'components/Notification/Notification';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    async function getTrendingList() {
      try {
        setLoading(true);
        const data = await requestTrendingMovies();
        setTrendingList(data.results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    getTrendingList();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList listData={trendingList} />
      {loading && <Loader />}
      <Notification />
    </main>
  );
};
export default Home;
