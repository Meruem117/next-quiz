import React from 'react'
import { Typography } from 'antd'
import type { scheduleItem } from '@/models/schedule'

const ScheduleTitle: React.FC<{ data: scheduleItem }> = ({ data }) => {
  return (
    <div className="base-box flex">
      <Typography.Title level={4} title={`${data.quizName} - Round ${data.round}`}>{data.quizName} #{data.round}</Typography.Title>
    </div>
  )
}

export default ScheduleTitle
