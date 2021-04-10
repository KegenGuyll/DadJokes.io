import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/social/Navigation';
import JokeCard from '../components/social/jokeCard';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>DadJokes.io</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <main>
        <section>
          <JokeCard
            punchline='No, I got them all cut!'
            setup='Dad, did you get a haircut?'
            id='1'
            tags={[
              {
                text: 'Featured Joke',
                textColor: 'black',
                color: 'gray',
                icon: (
                  <span className='material-icons' style={{ color: '#FFCE00' }}>
                    star
                  </span>
                ),
              },
              {
                text: 'Dad Joke',
                textColor: 'black',
                color: 'gray',
                icon: (
                  <span className='material-icons' style={{ color: '#0093FF' }}>
                    label
                  </span>
                ),
              },
            ]}
            author='Unknown'
            authorId='#2010'
            date='April 9, 2021'
          />
        </section>
      </main>
    </Container>
  );
}
