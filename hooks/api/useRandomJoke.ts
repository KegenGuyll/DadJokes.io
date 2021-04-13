import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import { JokeBody } from '../../models/social/joke';

export default function randomJoke() {
  const { data, error } = useSWR(
    `http://localhost:8080/api/random/joke`,
    fetcher
  );

  return {
    jokes: data as JokeBody,
    isLoading: !error && !data,
    isError: error,
  };
}
