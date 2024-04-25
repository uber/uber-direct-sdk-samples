import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { styletron } from '../styletron';
import Header from '../components/header';
import '../global.css';

const Main = styled('main', {
  fontFamily: 'UberMove',
  fontWeight: 400,
});

function App({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <Main>
          <Header />
          <Component {...pageProps} />
        </Main>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
