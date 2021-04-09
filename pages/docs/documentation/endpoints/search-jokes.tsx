import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import DocsLayout from '../../../../components/docs/DocsLayout';
import EndpointGenericWriteup from '../../../../components/docs/EndpointGenericWriteup';

export default function SearchJokes() {
  return (
    <DocsLayout>
      <Head>
        <title>Search Jokes</title>
        <meta charSet='UTF-8' />
        <meta name='description' content='DadJokes.io search jokes endpoint' />
        <meta
          name='keywords'
          content='DadJokes, API, Search Jokes, Endpoint'></meta>
        <meta name='author' content='Kegen Guyll'></meta>
      </Head>
      <h1>Search Jokes - </h1>
      <EndpointGenericWriteup />
      <section>
        <h1>Endpoint:</h1>
        <div className='endpoint'>
          <p>
            <code>
              GET https://dad-jokes.p.rapidapi.com/joke/search?term=frog
            </code>
          </p>
          <p>Hint: Search term can be anything, returns all results</p>
          <p>Fetching a random as joke as JSON:</p>
          <pre>
            <code>
              {`
    "success": true,
    "body": [
        {
            "_id": "5f80ccd641785ba7c7d27c3a",
            "type": "general",
            "setup": "What happens to a frog's car when it breaks down?",
            "punchline": "It gets toad."
        },
        {
            "_id": "5f80ccd641785ba7c7d27b68",
            "type": "general",
            "setup": "What happens to a frog's car when it breaks down?",
            "punchline": "It gets toad away"
        }
    ]
          `}
            </code>
          </pre>
        </div>
      </section>

      <style jsx global>{`
        pre {
          background-color: aliceblue;
        }
        .endpoint {
          margin-bottom: 5em;
        }
        section {
          margin: 0.1em 0 3em 0;
        }
      `}</style>
    </DocsLayout>
  );
}
