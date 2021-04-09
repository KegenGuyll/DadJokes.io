import Head from 'next/head';
import React from 'react';
import DocsLayout from '../../../../components/docs/DocsLayout';
import EndpointGenericWriteup from '../../../../components/docs/EndpointGenericWriteup';

export default function JokeByType() {
  return (
    <DocsLayout>
      <Head>
        <title>Joke By Type</title>
        <meta charSet='UTF-8' />
        <meta name='description' content='DadJokes.io Joke By Type endpoint' />
        <meta
          name='keywords'
          content='DadJokes, API, Joke By Type, Endpoint'></meta>
        <meta name='author' content='Kegen Guyll'></meta>
      </Head>
      <h1>Joke By Type - </h1>
      <EndpointGenericWriteup />
      <section>
        <h1>Endpoint:</h1>
        <div className='endpoint'>
          <p>
            <code>GET https://dad-jokes.p.rapidapi.com/joke/type/:type</code>
          </p>
          <p>
            <b>Example: </b>
            <code>
              GET https://dad-jokes.p.rapidapi.com/joke/type/knock-knock
            </code>
          </p>
          <p>
            Hint: Returns all jokes with the given type. Can be controlled with
            a query param <code>limit</code>
          </p>
          <p>Fetching Joke a based of ID as JSON:</p>
          <pre>
            <code>
              {`
    "success": true,
    "body": [
        {
            "_id": "5f80ccd641785ba7c7d27b55",
            "type": "knock-knock",
            "setup": "Knock knock. Who's there? A broken pencil. A broken pencil who?",
            "punchline": "Never mind. It's pointless."
        },
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
