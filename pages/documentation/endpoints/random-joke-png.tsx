import Head from 'next/head';
import React from 'react';
import DocsLayout from '../../../components/DocsLayout';
import EndpointGenericWriteup from '../../../components/EndpointGenericWriteup';

export default function RandomJoke() {
  return (
    <DocsLayout>
      <Head>
        <title>DadJokes Documentation | Random Joke PNG</title>
        <meta charSet='UTF-8' />
        <meta
          name='description'
          content='DadJokes.io random joke PNG endpoint'
        />
        <meta
          name='keywords'
          content='DadJokes, API, Random Joke, Endpoint'></meta>
        <meta name='author' content='Kegen Guyll'></meta>
      </Head>
      <h1>Random Joke PNG - </h1>
      <EndpointGenericWriteup />
      <section>
        <h1>Endpoint:</h1>
        <div className='endpoint'>
          <p>
            <code>GET https://dad-jokes.p.rapidapi.com/random/joke/png</code>
          </p>
          <pre>
            <code>
              {`
    "success": true,
    "body": {
        "_id": "60dd365e89ff41e084e26f84",
        "setup": "Anyone know how to lift a house?",
        "punchline": "My girlfriend wants me to put foundation on her face.",
        "type": "foundation",
        "likes": [],
        "author": {
            "name": "unknown",
            "id": null
        },
        "approved": true,
        "date": 1618108661,
        "image": "data:image/png;base64,..."
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
