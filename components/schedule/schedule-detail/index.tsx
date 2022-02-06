import React from 'react'
import { Typography, Space, Badge } from 'antd'
import { CalendarOutlined, ClockCircleOutlined, FileTextOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { scheduleItem } from '@/models/schedule'
import { STATUS_TYPE } from '@/constant'

const ScheduleDetail: React.FC<{ data: scheduleItem }> = ({ data }) => {
  return (
    <Badge.Ribbon text={STATUS_TYPE[data.status].text} color={STATUS_TYPE[data.status].color}>
      <div className="base-box flex flex-col">
        <Typography.Title level={3} title={`${data.quizName} - Round ${data.round}`}>{data.quizName} #{data.round}</Typography.Title>
        <Space size="middle">
          <IconText icon={CalendarOutlined} text={data.startTime.substring(0, 10)} title={`Start at: ${data.startTime.substring(0, 16)}`} />
          <IconText icon={ClockCircleOutlined} text={`${data.length} minutes`} title={`Length: ${data.length} minutes`} />
          <IconText icon={FileTextOutlined} text={data.count} title={`Question count: ${data.count}`} />
        </Space>
      </div>
    </Badge.Ribbon>
  )
}

export default ScheduleDetail
