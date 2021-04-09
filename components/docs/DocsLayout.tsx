import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import Navigation from "./Navigation";
import DocsNavigation from "./DocsNavigation";

const DocsLayout = ({ children, ...pageProps }) => {
  return (
    <>
      <Container>
        <Head>
          <title>DadJokes.io Documentation</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <nav>
          <Navigation />
        </nav>
      </Container>
      <Container style={{ marginTop: "2em" }} fluid>
        <main>
          <Row>
            <Col lg={2}>
              <DocsNavigation />
            </Col>
            <Col>{children}</Col>
          </Row>
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
    </>
  );
};

export default DocsLayout;
