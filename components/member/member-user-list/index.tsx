import React from 'react'
import { List, Avatar, Typography } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { memberItem } from '@/models/member'

const MemberUserList: React.FC<{ data: memberItem[] }> = ({ data }) => {
  return <List
    itemLayout="horizontal"
    dataSource={data}
    className="base-list"
    pagination={{
      pageSize: 6,
    }}
    renderItem={item => (
      <List.Item
        className="p-2 rounded-md"
        actions={[
          <IconText key={item.id} icon={CalendarOutlined} text={item.joinTime} title={`Joined time: ${item.joinTime}`} />
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<Typography.Title level={4} title={item.userName}>{item.userName}</Typography.Title>}
        />
      </List.Item>
    )}
  />
}

export default MemberUserList
