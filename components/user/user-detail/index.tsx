import React from 'react'
import { Avatar, Space, Typography } from 'antd'
import { MailOutlined, EnvironmentOutlined, CalendarOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { userItem } from '@/models/user'
import { GENDER, GENDER_TEXT, GENDER_AVATAR_SRC } from '@/constant'

const UserDetail: React.FC<{ data: userItem }> = ({ data }) => {
  return (
    <div className="base-box flex">
      <Avatar size={96} src={GENDER_AVATAR_SRC[data.gender]} />
      <div className="flex flex-col p-4">
        <Space>
          <Typography.Title level={2}>{data.name}</Typography.Title>
          {
            data.gender === GENDER.Male ?
              <ManOutlined title={GENDER_TEXT[GENDER.Male]} className="text-blue-500 text-base" /> :
              <WomanOutlined title={GENDER_TEXT[GENDER.Female]} className="text-red-500 text-base" />
          }
        </Space>
        <Space size="middle">
          <IconText icon={MailOutlined} text={data.email} title={`Email: ${data.email}`} />
          <IconText icon={CalendarOutlined} text={data.createTime} title={`Created: ${data.createTime}`} />
          {data.location === '' ? undefined : <IconText icon={EnvironmentOutlined} text={data.location} title={`Location: ${data.location}`} />}
        </Space>
      </div>
    </div>
  )
}

export default UserDetail
