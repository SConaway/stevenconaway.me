import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// type Props = {};

// class Document extends NextDocument<Props> {
class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className="bg-zinc-800 scroll-smooth">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
