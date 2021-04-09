import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, Row } from 'react-bootstrap';
import axios, { AxiosResponse } from 'axios';
import Link from 'next/link';

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

const CustomToggle = React.forwardRef(
  ({ children, onClick }: any, ref: any) => (
    <i
      style={{ fontSize: '25px', color: '#6c757d' }}
      className='bi bi-three-dots-vertical'
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}></i>
  )
);

const JokeByTypeShowcase = () => {
  const [randomJoke, setRandomJoke] = useState<Payload>();
  const [displayResponse, setDisplayResponse] = useState<boolean>(false);
  const [jokeType, setJokeType] = useState<string>('general');

  const fetchRandomJoke = () => {
    axios
      .get(
        `https://dad-jokes69420.herokuapp.com/api/joke/type/${jokeType}?limit=5`
      )
      .then((response: AxiosResponse<Payload>) => {
        setRandomJoke(response.data);
      });
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  const toggleResponse = () => {
    setDisplayResponse((prevState) => !prevState);
  };

  const inputJokeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setJokeType(event.currentTarget.value);
  };

  return (
    <div>
      <section>
        <Card>
          <Card.Header>
            <div
              style={{
                alignContent: 'baseline',
                alignItems: 'baseline',
                display: 'flex',
              }}>
              <p style={{ flexGrow: 1 }}>Let's a Joke by it's Type</p>
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'></Dropdown.Toggle>
                <Dropdown.Menu align={'right'}>
                  <Dropdown.Item onClick={toggleResponse}>
                    {displayResponse ? 'Hide' : 'Show'} Response
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card.Header>
          {!randomJoke ? (
            <p>Loading...</p>
          ) : (
            <Card.Body>
              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Row>
                      <Col>
                        <Form.Control
                          onChange={inputJokeType}
                          type='text'
                          as='select'
                          placeholder='Enter Joke Id'
                          value={jokeType}>
                          <option value='general'>general</option>
                          <option value='programming'>programming</option>
                          <option value='knock-knock'>knock-knock</option>
                          <option value='Dad Jokes'>Dad Jokes</option>
                        </Form.Control>
                      </Col>
                      <Col>
                        <Button
                          style={{ marginRight: '1em' }}
                          onClick={fetchRandomJoke}>
                          Search Joke
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={displayResponse ? 6 : 12}>
                  <p>{randomJoke.body[0].setup}</p>
                  <br />
                  <p>{randomJoke.body[0].punchline}</p>
                </Col>
                {displayResponse ? (
                  <Col lg={6}>
                    <p>Joke By Id Response :</p>
                    <pre>
                      <code className='prettyprint'>
                        {JSON.stringify(randomJoke, null, 2)}
                      </code>
                    </pre>
                  </Col>
                ) : null}
              </Row>
            </Card.Body>
          )}
          <Card.Footer>
            <Link href='/docs/documentation/endpoints/joke-by-type'>
              <Button variant='secondary'>Documentation</Button>
            </Link>
          </Card.Footer>
        </Card>
      </section>

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
    </div>
  );
};

export default JokeByTypeShowcase;
