import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/social/Navigation';
import JokeCard from '../components/social/jokeCard';
import JokeSubmit from '../components/social/jokeSubmit';
import { NextPage } from 'next';
import { Joke, JokeBody } from '../models/social/joke';
import axios, { AxiosResponse } from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../store/slices/profileSlice';

interface Props {
  jokes: JokeBody;
}

const Home: NextPage<Props> = () => {
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(3);
  const [jokes, setJokes] = useState<Joke[]>();
  const totalPages = limit / 423;

  const dispatch = useDispatch();

  dispatch(fetchUser());

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = () => {
    axios
      .get(`/api/joke/pagination?skip=${skip}&limit=${limit}`)
      .then((res: AxiosResponse<JokeBody>) => {
        if (jokes) {
          setJokes((prevState) => [...prevState, ...res.data.body]);
          setSkip(skip + limit);
        } else {
          setJokes(res.data.body);
          setSkip(skip + limit);
        }
      });
  };

  return (
    <Container>
      <Head>
        <title>DadJokes.io</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <main>
        <section>
          <JokeSubmit />
        </section>
        <article>
          <section>
            {jokes && (
              <InfiniteScroll
                dataLength={jokes.length}
                hasMore={true}
                next={fetchMoreData}
                loader={<h4>Loading...</h4>}>
                {jokes.map((joke, index) => (
                  <JokeCard
                    key={index}
                    punchline={joke.punchline}
                    setup={joke.setup}
                    id={joke._id}
                    tags={[
                      {
                        text: `${joke.type}`,
                        textColor: 'black',
                        color: 'gray',
                        icon: (
                          <span
                            className='material-icons'
                            style={{ color: '#0093FF' }}>
                            label
                          </span>
                        ),
                      },
                    ]}
                    author={joke.author.name}
                    authorId={joke.author.id}
                    date={joke.date}
                    likes={joke.likes}
                  />
                ))}
              </InfiniteScroll>
            )}
          </section>
        </article>
      </main>
    </Container>
  );
};
export default Home;
