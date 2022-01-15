import React, { Fragment } from 'react'
import Head from 'next/head'
import { Layout, BackTop } from 'antd'
import NavMenu from './nav-menu'

const BaseLayout: React.FC = (props) => {
  return (
    <Fragment>
      {/* head */}
      <Head>
        <title>Quiz</title>
        <meta name="description" content="A quiz system based on next." />
      </Head>
      {/* layout */}
      <Layout className="layout h-screen w-full">
        {/* header */}
        <Layout.Header className="flex justify-center space-x-4 px-4 pt-1.5 bg-white">
          <div className="text-4xl font-semibold cursor-default select-none text-AiDeep">Quiz</div>
          <NavMenu />
        </Layout.Header>
        {/* content */}
        <Layout.Content className="bg-gray-100 p-5">
          <div className="h-full w-full p-3">{props.children}</div>
        </Layout.Content>
        {/* footer */}
        <Layout.Footer className="fixed bottom-0 w-full text-center text-base">
          Quiz ©2022 Created by Meruem
        </Layout.Footer>
      </Layout>
      <BackTop />
    </Fragment>
  )
}

export default BaseLayout
