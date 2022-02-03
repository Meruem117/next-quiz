import React, { useState, useEffect } from 'react'
import { Typography, Space, Badge } from 'antd'
import { CalendarOutlined, ClockCircleOutlined, FileTextOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { scheduleItem } from '@/models/schedule'
import { SCHEDULE, SCHEDULE_STATUS } from '@/constant'

type statusItem = {
  text: string,
  color: string
}

const ScheduleDetail: React.FC<{ data: scheduleItem }> = ({ data }) => {
  const [status, setStatus] = useState<statusItem>()

  useEffect(() => {
    const status = getScheduleStatus(data)
    setStatus(status)
  }, [data])

  const getScheduleStatus = (schedule: scheduleItem): statusItem => {
    const { isStart, isEnd } = schedule
    if (isStart === SCHEDULE.NOT_START) {
      return SCHEDULE_STATUS.REMAIN
    } else if (isEnd === SCHEDULE.END) {
      return SCHEDULE_STATUS.END
    } else {
      return SCHEDULE_STATUS.START
    }
  }

  return (
    <Badge.Ribbon text={status?.text} color={status?.color}>
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
