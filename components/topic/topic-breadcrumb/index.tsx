import React from 'react'
import Link from 'next/link'
import { Breadcrumb } from 'antd'

const TopicBreadcrumb: React.FC<{ topic: string }> = ({ topic }) => {
  return (
    <Breadcrumb className="p-2 text-lg">
      <Breadcrumb.Item>
        <Link href={'/topic'}>Topic</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{topic}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default TopicBreadcrumb
