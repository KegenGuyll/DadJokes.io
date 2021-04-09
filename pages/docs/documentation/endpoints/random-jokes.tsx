import Head from 'next/head';
import React from 'react';
import DocsLayout from '../../../../components/DocsLayout';
import EndpointGenericWriteup from '../../../../components/EndpointGenericWriteup';

export default function RandomJoke() {
  return (
    <DocsLayout>
      <Head>
        <title>Random Joke</title>
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
            <code>GET https://dad-jokes.p.rapidapi.com/random/joke</code>
          </p>
          <p>Fetching a random as joke as JSON:</p>
          <pre>
            <code>
              {`
    "success": true,
    "body": [
        {
            "_id": "5f80ccd641785ba7c7d27c18",
            "type": "general",
            "setup": "What do you call a fashionable lawn statue with an excellent sense of rhythmn?",
            "punchline": "A metro-gnome"
        }
    ]
          `}
            </code>
          </pre>
        </div>
        <div className='endpoint'>
          <p>
            <code>
              GET https://dad-jokes.p.rapidapi.com/random/joke?count=2
            </code>
          </p>
          <p>Fetching a random as joke with a param of count</p>
          <p>
            <b>Note: </b> Count limit is 5
          </p>
          <pre>
            <code>
              {`
    "success": true,
    "body": [
        {
            "_id": "5f80ccd641785ba7c7d27b6c",
            "type": "programming",
            "setup": "Why do Java programmers wear glasses?",
            "punchline": "Because they don't C#"
        },
        {
            "_id": "5f80ccd641785ba7c7d27b58",
            "type": "programming",
            "setup": "What's the best thing about a Boolean?",
            "punchline": "Even if you're wrong, you're only off by a bit."
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
