import React from 'react'
import { Typography } from 'antd'
import type { scheduleItem } from '@/models/schedule'

const ScheduleInfo: React.FC<{ data: scheduleItem }> = ({ data }) => {
  return (
    <div className="flex flex-col w-1/2">
      <Typography.Title level={2} title={`round: ${data.round}`}>#{data.round}</Typography.Title>
      <div className="flex pl-2">
        <Typography.Text type="secondary" className="w-12">Start:</Typography.Text>
        <Typography.Text type="secondary">{data.startTime}</Typography.Text>
      </div>
      <div className="flex pl-2">
        <Typography.Text type="secondary" className="w-12">End:</Typography.Text>
        <Typography.Text type="secondary">{data.endTime}</Typography.Text>
      </div>
    </div>
  )
}

export default ScheduleInfo
