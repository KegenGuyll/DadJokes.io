import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import { JokeBody } from '../../models/social/joke';

export default function randomJoke() {
  const { data, error } = useSWR(
    `http://dadjokes-beta.herokuapp.com/api/random/joke`,
    fetcher
  );

  return {
    jokes: data as JokeBody,
    isLoading: !error && !data,
    isError: error,
  };
}
