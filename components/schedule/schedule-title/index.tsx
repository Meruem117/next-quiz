import React from 'react'
import { Typography } from 'antd'
import type { scheduleItem } from '@/models/schedule'

const ScheduleTitle: React.FC<{ data: scheduleItem }> = ({ data }) => {
  return (
    <div className="base-box flex flex-col">
      <Typography.Title level={4} title={`${data.quizName} - Round ${data.round}`}>{data.quizName} #{data.round}</Typography.Title>
      <div className="flex">
        <Typography.Text type="secondary" title={`${data.count} questions in total`}>{data.count} questions</Typography.Text>
      </div>
    </div>
  )
}

export default ScheduleTitle
