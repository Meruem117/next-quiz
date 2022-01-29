import React from 'react'
import { Badge, Avatar, Space, Typography } from 'antd'
import { MailOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { userItem } from '@/models/user'
import { ROLE_TYPE, GENDER, GENDER_TEXT, GENDER_AVATAR_SRC } from '@/constant'

const UserDetail: React.FC<{ data: userItem }> = ({ data }) => {
  return (
    <Badge.Ribbon text={ROLE_TYPE[data.role].text} color={ROLE_TYPE[data.role].color}>
      <div className="base-box flex">
        <Avatar size={96} src={GENDER_AVATAR_SRC[data.gender]} />
        <div className="flex flex-col p-4">
          <Space size="small">
            <Typography.Title level={2}>{data.name}</Typography.Title>
            {
              data.gender === GENDER.Male ?
                <ManOutlined title={GENDER_TEXT[GENDER.Male]} className="text-blue-500 text-base" /> :
                <WomanOutlined title={GENDER_TEXT[GENDER.Female]} className="text-red-500 text-base" />
            }
          </Space>
          <IconText icon={MailOutlined} text={data.email} title={`Email: ${data.email}`} />
        </div>
      </div>
    </Badge.Ribbon>
  )
}

export default UserDetail
