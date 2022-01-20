import React from 'react'
import Link from 'next/link'
import { List, Avatar, Typography } from 'antd'
import type { topicItem } from '@/models/topic'

const TopicList: React.FC<{ data: topicItem[] }> = ({ data }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      className="base-list"
      pagination={{
        pageSize: 6,
      }}
      renderItem={item => (
        <Link href={`/topic/${item.topic}`} passHref>
          <List.Item className="p-2 rounded-md cursor-pointer hover:bg-green-200 hover:shadow-lg ease-in-out duration-75">
            <List.Item.Meta
              avatar={<Avatar shape="square" size={48} className="bg-green-400">{item.topic}</Avatar>}
              title={<Typography.Title level={4} title={item.topic}>{item.topic}</Typography.Title>}
              description={
                <Typography.Paragraph
                  type="secondary"
                  ellipsis={true}
                  className="w-48"
                  title={item.description}
                >{item.description}
                </Typography.Paragraph>
              }
            />
          </List.Item>
        </Link>
      )}
    />
  )
}

export default TopicList
