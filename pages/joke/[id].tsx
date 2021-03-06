import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

import Navigation from '../../components/Navigation';

interface Props {
  result: {
    _id: string;
    setup: string;
    punchline: string;
    type: string;
    approved: boolean;
    date: number;
    image: string;
  };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const result = await axios.get(
      `https://api.dadjokes.io/api/joke/${context.query.id}/png`
    );

    return {
      props: {
        result: result.data.body,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {} as never,
    };
  }
};

const JokePageId: NextPage<Props> = ({ result }) => {
  return (
    <Container>
      <Head>
        <title>DadJokes.io</title>
        <meta
          name='description'
          content='We built this API to have an unlimited supply of dad jokes for our DadJokes application. If you find yourself overwhelmed, we organized this documentation into four major areas.'
        />
        <meta property='og:title' content='DadJokes.io' />
        <meta
          property='og:description'
          content={`${result.setup} \n \n${result.punchline}`}
        />
        <meta
          property='og:image'
          content='https://dad-jokes-io-three.vercel.app/_next/image?url=%2Fimages%2FLogo.svg&w=640&q=75'
        />
        <meta
          property='og:url'
          content={`https://dadjokes.io/joke/${result._id}`}
        />
        <meta name='twitter:title' content='DadJokes.io' />
        <meta name='twitter:description' content={result.punchline} />
        <meta name='twitter:creator' content='@DadjokesI' />
        <meta
          name='twitter:site'
          content={`https://dadjokes.io/joke/${result._id}`}
        />
        <meta
          name='twitter:image'
          content='https://dad-jokes-io-three.vercel.app/_next/image?url=%2Fimages%2FLogo.svg&w=640&q=75'
        />
        <meta name='twitter:card' content='summary_image' />
      </Head>
      <Navigation />
      <img src={result.image} alt='Random Joke' />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  );
};

export default JokePageId;
