import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../../components/Navigation";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";

interface Payload {
  success: boolean;
  body: Joke[];
}

interface Joke {
  _id: string;
  setup: string;
  punchline: string;
  type: string;
}

const Showcase = () => {
  const [randomJoke, setRandomJoke] = useState<Payload>();

  const fetchRandomJoke = () => {
    axios
      .get("https://dad-jokes69420.herokuapp.com/api/random/joke")
      .then((response: AxiosResponse<Payload>) => {
        setRandomJoke(response.data);
      });
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <Container>
      <Head>
        <title>DadJokes.io Showcase</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <Container>
        <main>
          <Card>
            <Card.Header>Let's get a Random Joke</Card.Header>
            {!randomJoke ? (
              <p>Loading...</p>
            ) : (
              <Card.Body>
                <Row>
                  <Col lg={6}>
                    <p>{randomJoke.body[0].setup}</p>
                    <p>{randomJoke.body[0].punchline}</p>
                  </Col>
                  <Col lg={6}>
                    <p>Random Joke Response :</p>
                    <pre>
                      <code className='prettyprint'>
                        {JSON.stringify(randomJoke, null, 2)}
                      </code>
                    </pre>
                  </Col>
                </Row>
              </Card.Body>
            )}
            <Card.Footer>
              <Button style={{ marginRight: "1em" }} onClick={fetchRandomJoke}>
                Next Joke
              </Button>
              <Link href='/documentation/endpoints/random-jokes'>
                <Button variant='secondary'>Documentation</Button>
              </Link>
            </Card.Footer>
          </Card>
        </main>
      </Container>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Montserrat", sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  );
};

export default Showcase;
