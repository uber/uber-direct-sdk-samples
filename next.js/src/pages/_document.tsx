// @ts-ignore
import { Server, Sheet } from 'styletron-engine-atomic';
import { styletron } from '../styletron';
import { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import React from 'react';

type Props = {
  stylesheets: Sheet[];
};

const MyDocument = ({ stylesheets }: Props) => {
  return (
    <Html>
      <Head>
        {stylesheets.map((sheet, i) => (
          <style
            key={i}
            className="_styletron_hydrate_"
            dangerouslySetInnerHTML={{ __html: sheet.css }}
            media={sheet.attrs.media}
            data-hydrate={sheet.attrs['data-hydrate']}
          />
        ))}
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
          async
          defer
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const page = await ctx.renderPage({
    enhanceApp: (App: any) => (props: any) => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ),
  });
  const stylesheets = (styletron as Server).getStylesheets() || [];
  return { ...page, stylesheets };
};

export default MyDocument;
