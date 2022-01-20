import React from 'react'
import Link from 'next/link'
import { Menu } from 'antd'

const ExploreNav: React.FC<{ select: string }> = ({ select }) => {
  return (
    <div className="flex justify-center p-2">
      <Menu mode="horizontal" defaultSelectedKeys={[select]} className="bg-transparent text-lg w-1/4 h-10">
        <Menu.Item key="topic">
          <Link href={'/topic'}>Topic</Link>
        </Menu.Item>
        <Menu.Item key="quiz">
          <Link href={'/quiz'}>Quiz</Link>
        </Menu.Item>
        <Menu.Item key="team">
          <Link href={'/team'}>Team</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default ExploreNav
