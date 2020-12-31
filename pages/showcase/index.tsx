import Head from "next/head";
import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../../components/Navigation";

export default function Showcase() {
  return (
    <Container>
      <Head>
        <title>DadJokes.io Showcase</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main></main>
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
}
