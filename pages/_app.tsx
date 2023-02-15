import type { AppProps } from 'next/app';
import store from '../redux/store/index';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { postsApi } from '../redux/service/api';
import '../styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}> <ApiProvider api={postsApi}> <Component {...pageProps} /> </ApiProvider> </Provider>
}