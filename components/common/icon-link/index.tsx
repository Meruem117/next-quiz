import React, { ReactElement } from 'react'
import { Space, Typography } from 'antd'

const IconLink = ({ icon, text, title, href }: { icon: React.FC, text: string | number, title?: string, href: string }): ReactElement => (
  <Space title={title}>
    {React.createElement(icon)}
    <Typography.Link href={href}>{text}</Typography.Link>
  </Space>
)

export default IconLink
