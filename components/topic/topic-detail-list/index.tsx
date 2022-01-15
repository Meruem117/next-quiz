import React from 'react'
import Link from 'next/link'
import { List, Avatar, Typography } from 'antd'
import type { topicItem } from '@/models/topic'

const TopicDetailList: React.FC<{ data: topicItem[] }> = ({ data }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      className="w-1/2 mx-auto shadow-xl p-2"
      pagination={{
        pageSize: 6,
      }}
      footer={
        <a>Add a Topic</a>
      }
      renderItem={item => (
        <Link href={`/topic/${item.topic}`} passHref>
          <List.Item className="bg-white p-2 rounded cursor-pointer hover:bg-green-200 hover:shadow-lg">
            <List.Item.Meta
              avatar={<Avatar shape="square" size={48} src={`https://ui-avatars.com/api/?name=${item.topic}`} />}
              title={<Typography.Title level={4} title={item.topic}>{item.topic}</Typography.Title>}
              description={item.description}
            />
          </List.Item>
        </Link>
      )}
    />
  )
}

export default TopicDetailList
