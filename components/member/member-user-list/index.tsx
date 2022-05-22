import React from 'react'
import Link from 'next/link'
import { List, Avatar, Typography, Button } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { memberItem } from '@/models/member'
import { convertUsername } from '@/utils'

const MemberUserList: React.FC<{ data: memberItem[], isLeader: boolean }> = ({ data, isLeader }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      pagination={{
        pageSize: 6,
      }}
      renderItem={item => (
        <List.Item
          className="p-2 rounded-md"
          actions={[
            <IconText key={item.id} icon={CalendarOutlined} text={item.joinTime} title={`Joined time: ${item.joinTime}`} />,
            isLeader ? <Button key={item.id} type="link" danger>Delete</Button> : undefined
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar className="bg-orange-500">{convertUsername(item.userName)}</Avatar>}
            title={
              <Link href={`/user/${item.userId}`} passHref>
                <Typography.Title level={4} title={item.userName} className="cursor-pointer hover:text-blue-600">
                  {item.userName}
                </Typography.Title>
              </Link>
            }
          />
        </List.Item>
      )}
    />
  )
}

export default MemberUserList
