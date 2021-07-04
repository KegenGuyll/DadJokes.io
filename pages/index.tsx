import Head from 'next/head';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import navigationCards from '../public/data/navigationCards.json';
import Navigation from '../components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import EmailSubscribe from '../components/emailSubscribe';
interface NavigationCards {
  title: string;
  description: string;
  documentationLink: string;
}

export default function Home() {
  const RouteCards: NavigationCards[] = navigationCards;
  return (
    <Container>
      <Head>
        <title>DadJokes.io</title>
        <meta
          name='description'
          content='We built this API to have an unlimited supply of dad jokes for our DadJokes application. If you find yourself overwhelmed, we organized this documentation into four major areas.'
        />
      </Head>
      <Navigation />
      <main>
        <section
          style={{
            textAlign: 'center',
            marginBottom: '27em',
            marginTop: '13em',
          }}>
          <div>
            <Image src='/images/Logo.svg' width='400rem' height='350rem' />
            <blockquote>
              "good as it gets" <br /> - Kegen Guyll
            </blockquote>
          </div>

          <div>
            <Link href='/documentation/getting-started'>
              <Button style={{ width: '10em', marginRight: '1em' }}>
                Documentation
              </Button>
            </Link>
            <Link href='/showcase/random-jokes'>
              <Button style={{ width: '10em' }} variant='secondary'>
                Showcase
              </Button>
            </Link>
          </div>
        </section>
        <section style={{ textAlign: 'center', marginBottom: '27em' }}>
          <h1>Why DadJokes.io</h1>
          <blockquote style={{ marginBottom: '1em' }}>
            Ranked 3rd on Rakuten "top jokes API's" 🤷
          </blockquote>
          <Row>
            {RouteCards.map((item, index) => (
              <Col lg={4} xs={12} style={{ textAlign: 'center' }} key={index}>
                <Card
                  style={{
                    textAlign: 'left',
                    marginTop: '2em',
                  }}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Link href={item.documentationLink}>
                      Documentation
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
        <section style={{ marginBottom: '27em' }}>
          <Row>
            <Col lg={8} xs={12}>
              <h1>Be the first to find out about new updates</h1>
              <p>
                Join the DadJokes.io newsletter and stay updated on the any
                releases and features
              </p>
            </Col>
            <Col lg={4} xs={12}>
              <EmailSubscribe />
            </Col>
          </Row>
        </section>
        <footer></footer>
      </main>
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
}
