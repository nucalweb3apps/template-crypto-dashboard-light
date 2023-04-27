import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from '@/types';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import ModalsContainer from '@/components/modal-views/container';
import { WalletProvider } from '@/lib/hooks/use-connect';
import DrawersContainer from '@/components/drawer-views/container';
import 'overlayscrollbars/css/OverlayScrollbars.css';
// base css file
import 'swiper/css';
import '@/assets/css/scrollbar.css';
import '@/assets/css/globals.css';
import '@/assets/css/range-slider.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  //could remove this if you don't need to page level layout
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        {/* maximum-scale 1 meta tag need to prevent ios input focus auto zooming */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <title>Nucal - Swap/Liq/Farms Template</title>
      </Head>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
        forcedTheme="light"
      >
        <WalletProvider>
          {getLayout(<Component {...pageProps} />)}
          <ModalsContainer />
          <DrawersContainer />
        </WalletProvider>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
