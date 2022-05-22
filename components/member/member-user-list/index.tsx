import React, { useState } from 'react'
import Link from 'next/link'
import { List, Avatar, Typography, Button, Popconfirm, message } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import { cloneDeep } from 'lodash'
import IconText from '@/components/common/icon-text'
import type { memberItem } from '@/models/member'
import { handleDeleteMember } from '@/services/member'
import { convertUsername } from '@/utils'

const MemberUserList: React.FC<{ data: memberItem[], isLeader: boolean }> = ({ data, isLeader }) => {
  const [visible, setVisible] = useState<boolean[]>([])

  const showPopconfirm = (index: number): void => {
    const currentVisible = cloneDeep(visible)
    currentVisible[index] = true
    setVisible(currentVisible)
  }

  const closePopconfirm = (index: number): void => {
    const currentVisible = cloneDeep(visible)
    currentVisible[index] = false
    setVisible(currentVisible)
  }

  const deleteMember = async (id: number, index: number): Promise<void> => {
    const res = await handleDeleteMember({ id })
    if (res.data) {
      message.info('Delete successfully')
    } else {
      message.error('Fail to delete')
    }
    closePopconfirm(index)
  }

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      pagination={{
        pageSize: 6,
      }}
      renderItem={(item, index) => (
        <List.Item
          className="p-2 rounded-md"
          actions={[
            <IconText key={item.id} icon={CalendarOutlined} text={item.joinTime} title={`Joined time: ${item.joinTime}`} />,
            isLeader ?
              <Popconfirm
                title='Are you sure to delete?'
                visible={visible[index]}
                onConfirm={() => deleteMember(item.id, index)}
                onCancel={() => closePopconfirm(index)}
              >
                <Button key={item.id} type="link" danger onClick={() => showPopconfirm(index)}>Delete</Button>
              </Popconfirm>
              : undefined
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
