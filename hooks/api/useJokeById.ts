import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import { JokeByID } from '../../models/social/joke';

export default function jokeByID(id: string) {
  const { data, error } = useSWR(
    `http://dadjokes-beta.herokuapp.com/api/joke/${id}`,
    fetcher
  );

  return {
    joke: data as JokeByID,
    isLoading: !error && !data,
    isError: error,
  };
}
