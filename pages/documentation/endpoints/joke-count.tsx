import Head from 'next/head';
import React from 'react';
import DocsLayout from '../../../components/DocsLayout';
import EndpointGenericWriteup from '../../../components/EndpointGenericWriteup';

export default function RandomJoke() {
  return (
    <DocsLayout>
      <Head>
        <title>DadJokes Documentation | Joke Count</title>
        <meta charSet='UTF-8' />
        <meta name='description' content='DadJokes.io random joke endpoint' />
        <meta
          name='keywords'
          content='DadJokes, API, Random Joke, Endpoint'></meta>
        <meta name='author' content='Kegen Guyll'></meta>
      </Head>
      <h1>Random Joke - </h1>
      <EndpointGenericWriteup />
      <section>
        <h1>Endpoint:</h1>
        <div className='endpoint'>
          <p>
            <code>GET https://dad-jokes.p.rapidapi.com/joke/count</code>
          </p>
          <p>Fetching a random as joke as JSON:</p>
          <pre>
            <code>
              {`
{
    "success": true,
    "body": 18175
}
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
