import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DrinkProvider } from '../src/providers/Chakra'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DrinkProvider>
      <Component {...pageProps} />
    </DrinkProvider>
  );
}
