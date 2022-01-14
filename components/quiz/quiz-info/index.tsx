import React from 'react'
import { Typography } from 'antd'
import type { quizItem } from '@/models/quiz'

const QuizInfo: React.FC<{ data: quizItem }> = ({ data }) => {
  return (
    <div className="flex flex-col w-1/2">
      <Typography.Title level={2}>{data.quiz}</Typography.Title>
      <div className="pl-2">
        <Typography.Text strong>{data.description}</Typography.Text>
      </div>
      <div className="flex pl-2">
        <Typography.Text type="secondary">Total Rounds: </Typography.Text>
        <Typography.Text type="secondary">{data.round}</Typography.Text>
      </div>
    </div>
  )
}

export default QuizInfo
