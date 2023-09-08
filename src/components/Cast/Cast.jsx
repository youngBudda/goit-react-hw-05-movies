import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestCast } from 'services/api';
import { toast } from 'react-toastify';
import Notification from 'components/Notification/Notification';
import Loader from 'components/Loader/Loader';
import { StyledCast } from './Cast.styled';
import voldemort from '../../components/images/voldemort.webp';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        const data = await requestCast(movieId);
        setCast(data.cast);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <StyledCast>
      {loading && <Loader />}
      {cast.length > 0 ? (
        <ul className="cast">
          {cast.map(({ credit_id, profile_path, name, character }) => (
            <li className="cast" key={credit_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : voldemort
                }
                alt={name}
                loading="lazy"
              />
              <h3>{name}</h3>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any cast for this movie.</div>
      )}
      <Notification />
    </StyledCast>
  );
};

export default Cast;
