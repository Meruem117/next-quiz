import React, { Fragment } from 'react'
import Head from 'next/head'
import { Layout, BackTop } from 'antd'
import BaseMenu from './base-menu'
import UserAvatar from '@/components/user/user-avatar'

const BaseLayout: React.FC = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="A quiz system based on next." />
      </Head>
      <Layout className="layout h-screen w-full">
        <Layout.Header className="flex space-x-4 pt-1.5 bg-white">
          <div className="text-4xl font-semibold cursor-default text-AiDeep">Quiz</div>
          <BaseMenu />
          <UserAvatar />
        </Layout.Header>
        <Layout.Content className="bg-gray-100 p-5">
          <div className="h-full w-full p-3">{props.children}</div>
        </Layout.Content>
        <Layout.Footer className="fixed bottom-0 w-full text-center text-base bg-gray-200">
          Quiz ©2022 Created by Meruem
        </Layout.Footer>
      </Layout>
      <BackTop />
    </Fragment>
  )
}

export default BaseLayout
