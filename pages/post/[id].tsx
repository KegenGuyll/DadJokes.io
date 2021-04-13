import axios, { AxiosResponse } from 'axios';
import { resolve } from 'dns';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../components/social/Navigation';
import JokeCard from '../../components/social/jokeCard';
import { Joke, JokeByID } from '../../models/social/joke';

interface Props {
  joke: Joke;
}

const EditPost: NextPage<Props> = ({ joke }) => {
  return (
    <Container>
      <Head>
        <title>{joke.setup}</title>
        <meta property='og:site_name' content='DadJokes.io'></meta>
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://dadjokes.io/post/${joke._id}`}
        />
        <meta property='og:title' content={joke.setup} />
        <meta property='og:description' content={joke.punchline} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://dadjokes.io/post/${joke._id}`}
        />
        <meta property='twitter:title' content={`${joke.setup}`} />
        <meta property='twitter:description' content={`${joke.punchline}`} />
      </Head>
      <Navigation />
      <article>
        <JokeCard
          setup={joke.setup}
          punchline={joke.punchline}
          author={joke.author.name}
          authorId={joke.author.id}
          id={joke._id}
          tags={[
            {
              text: `${joke.type}`,
              textColor: 'black',
              color: 'gray',
              icon: (
                <span className='material-icons' style={{ color: '#0093FF' }}>
                  label
                </span>
              ),
            },
          ]}
          date={joke.date}
          likes={joke.likes}
        />
      </article>
    </Container>
  );
};

EditPost.getInitialProps = async (context) => {
  const postId = context.query.id;

  const res: AxiosResponse<JokeByID> = await axios.get(
    `http://dadjokes-beta.herokuapp.com/api/joke/${postId}`
  );

  return { joke: res.data.body };
};

export default EditPost;
