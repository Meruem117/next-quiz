import React from 'react'
import Link from 'next/link'
import { Menu } from 'antd'
import { HomeOutlined, TagsOutlined } from '@ant-design/icons'

const NavMenu: React.FC = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['home']} className="text-lg font-medium w-1/2">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link href={'/'}>Home</Link>
      </Menu.Item>
      <Menu.Item key="topic" icon={<TagsOutlined />}>
        <Link href={'/topic'}>Topic</Link>
      </Menu.Item>
    </Menu>
  )
}

export default NavMenu
