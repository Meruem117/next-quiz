import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Fragment } from 'react'
import { Layout, Menu } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

const BaseLayout: React.FC = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Next Quiz</title>
        <meta name="description" content="A quiz system based on next." />
      </Head>
      <Layout className="layout h-screen w-full">
        <Layout.Header className="flex justify-start space-x-4 px-4 pt-2 bg-white">
          <div className="text-4xl font-semibold cursor-default select-none text-AiDeep">Quiz</div>
          <Menu mode="horizontal" defaultSelectedKeys={['home']} className="w-full text-base font-medium">
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link href={'/'}>Home</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link href={'/about'}>About</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content className="bg-gray-100 p-8">
          <div className="h-full w-full bg-white p-5">{props.children}</div>
        </Layout.Content>
        <Layout.Footer className="fixed bottom-0 w-full text-center">Quiz ©2022 Created by Meruem</Layout.Footer>
      </Layout>
    </Fragment>
  )
}

export default BaseLayout
