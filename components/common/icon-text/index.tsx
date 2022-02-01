import React, { ReactElement } from 'react'
import { Space, Typography } from 'antd'

const IconText = ({ icon, text, title }: { icon: React.FC, text: string | number, title?: string }): ReactElement => (
  <Space title={title}>
    {React.createElement(icon)}
    <Typography.Text>{text}</Typography.Text>
  </Space>
)

export default IconText
