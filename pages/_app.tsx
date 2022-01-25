import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import store from '@/app/store'
import Layout from '@/components/layout'
import 'antd/dist/antd.css'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
