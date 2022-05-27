import React, { useState } from 'react'
import Link from 'next/link'
import { List, Avatar, Typography } from 'antd'
import type { teamItem } from '@/models/team'

const TeamList: React.FC<{ data: teamItem[] }> = ({ data }) => {
  const [visible, setVisible] = useState<boolean>(false)

  const showModal = (): void => {
    setVisible(true)
  }

  const closeModal = (): void => {
    setVisible(false)
  }

  return (
    <List
      itemLayout="vertical"
      dataSource={data}
      className="base-box"
      pagination={{
        pageSize: 5,
      }}
      renderItem={item => (
        <Link href={`/team/${item.id}`} passHref>
          <List.Item className="p-2 rounded-md cursor-pointer hover:bg-blue-100 hover:shadow-lg ease-in-out duration-75">
            <List.Item.Meta
              avatar={<Avatar shape="square" size={48} className="bg-blue-400">{item.name}</Avatar>}
              title={<Typography.Title level={4} title={item.name}>{item.name}</Typography.Title>}
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

export default TeamList
