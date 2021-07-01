import Head from 'next/head';
import React from 'react';
import DocsLayout from '../../../components/DocsLayout';
import EndpointGenericWriteup from '../../../components/EndpointGenericWriteup';

export default function RandomJoke() {
  return (
    <DocsLayout>
      <Head>
        <title>DadJokes Documentation | Joke By ID</title>
        <meta charSet='UTF-8' />
        <meta name='description' content='DadJokes.io Joke By ID endpoint' />
        <meta
          name='keywords'
          content='DadJokes, API, Joke By ID, Endpoint'></meta>
        <meta name='author' content='Kegen Guyll'></meta>
      </Head>
      <h1>Joke By ID - </h1>
      <EndpointGenericWriteup />
      <section>
        <h1>Endpoint:</h1>
        <div className='endpoint'>
          <p>
            <code>GET https://dad-jokes.p.rapidapi.com/joke/:_id</code>
          </p>
          <p>
            <b>Example: </b>
            <code>
              GET https://dad-jokes.p.rapidapi.com/joke/5f80ccd641785ba7c7d27b66
            </code>
          </p>
          <p>Fetching Joke a based of ID as JSON:</p>
          <pre>
            <code>
              {`
    "success": true,
    "body": {
        "_id": "5f80ccd641785ba7c7d27b66",
        "type": "programming",
        "setup": "There are  types of people in this world...",
        "punchline": "Those who understand binary and those who don't"
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
