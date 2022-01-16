import React from 'react'
import { Typography, Tag, Space, Divider } from 'antd'
import { UserOutlined, FireOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { quizItem } from '@/models/quiz'

const QuizDetail: React.FC<{ data: quizItem }> = ({ data }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded p-4 space-y-4">
      <Typography.Title level={3}>{data.quiz}</Typography.Title>
      <Space split={<Divider type="vertical" />}>
        <Tag color="volcano">{data.topic}</Tag>
        <IconText icon={UserOutlined} text={data.creator} title={`Creator: ${data.creator}`} />
        <IconText icon={FireOutlined} text={data.round} title={`Total Rounds: ${data.round}`} />
      </Space>
      <Typography.Text type="secondary" className="text-base">{data.description}</Typography.Text>
    </div>
  )
}

export default QuizDetail
