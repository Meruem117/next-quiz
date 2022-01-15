import React, { ReactElement } from "react"
import { Space } from 'antd'

const IconText = ({ icon, text, title }: { icon: React.FC, text: string, title?: string }): ReactElement => (
  <Space title={title}>
    {React.createElement(icon)}
    {text}
  </Space>
)

export default IconText
