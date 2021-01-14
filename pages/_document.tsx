import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css'></link>
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
          <script
            dangerouslySetInnerHTML={{
              __html: `            (function(w,d,s,l,i){w[l] = w[l] || []{'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MH9P3QX');`,
            }}
          />
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-3YVF0J1HKW'
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3YVF0J1HKW');
        `,
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-MH9P3QX'
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>
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
