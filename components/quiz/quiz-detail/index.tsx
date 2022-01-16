import React from 'react'
import { Typography } from 'antd'
import { CrownOutlined, TagOutlined, UserOutlined, FlagOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { quizItem } from '@/models/quiz'

const QuizDetail: React.FC<{ data: quizItem }> = ({ data }) => {
  return (
    <div className="flex flex-col bg-white shadow-xl rounded p-3 space-y-2">
      <Typography.Title level={3}>{data.quiz}</Typography.Title>
      <IconText icon={CrownOutlined} text={data.winner || '-'} title={`Winner: ${data.winner || 'Undecided'}`} />
      <IconText icon={TagOutlined} text={data.topic} title={`Topic: ${data.topic}`} />
      <IconText icon={UserOutlined} text={data.creator} title={`Creator: ${data.creator}`} />
      <IconText icon={FlagOutlined} text={data.round} title={`Total Rounds: ${data.round}`} />
      <Typography.Paragraph type="secondary" ellipsis={true} title={data.description}>{data.description}</Typography.Paragraph>
    </div>
  )
}

export default QuizDetail
