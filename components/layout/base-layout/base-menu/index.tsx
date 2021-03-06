import React from 'react'
import Link from 'next/link'
import { Menu } from 'antd'
import { HomeOutlined, GlobalOutlined } from '@ant-design/icons'

const BaseMenu: React.FC = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['']} className="text-lg font-medium w-1/2">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link href={'/'}>Home</Link>
      </Menu.Item>
      <Menu.Item key="topic" icon={<GlobalOutlined />}>
        <Link href={'/topic'}>Explore</Link>
      </Menu.Item>
    </Menu >
  )
}

export default BaseMenu
