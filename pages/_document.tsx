import Document, { Html, Head, Main, NextScript } from "next/document";
import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='title' content='Dad Jokes' />
          <meta name='description' content='One of the best Dad Jokes APIs' />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://dadjokes.io' />
          <meta property='og:title' content='Dad Jokes' />
          <meta
            property='og:description'
            content='One of the best Dad Jokes APIs'
          />
          <meta property='og:image' content='/images/DadJokes.png' />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://dadjokes.io' />
          <meta property='twitter:title' content='Dad Jokes' />
          <meta
            property='twitter:description'
            content='One of the best Dad Jokes APIs'
          />
          <meta property='twitter:image' content='/images/DadJokes.png' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
            rel='stylesheet'
          />
          <link rel='shortcut icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
