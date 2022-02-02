import React, { ReactElement } from 'react'
import { List, Typography, Tag, Button } from 'antd'
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { scheduleItem } from '@/models/schedule'
import { SCHEDULE, SCHEDULE_STATUS } from '@/constant'

const ScheduleList: React.FC<{ data: scheduleItem[], select: string[] }> = ({ data, select }) => {
  const ScheduleListItem = ({ item, color, text }: { item: scheduleItem, color: string, text: string }): ReactElement => (
    <List.Item
      className="p-2 rounded-md"
      actions={[
        <Tag key={item.id} color={color}>{text}</Tag>,
        <IconText
          key={item.id}
          icon={CalendarOutlined}
          text={item.startTime.substring(0, 10)} title={`Start at: ${item.startTime.substring(0, 16)}`}
        />,
        <IconText key={item.id} icon={ClockCircleOutlined} text={`${item.length} minutes`} title={`Length: ${item.length} minutes`} />
      ]}
      extra={
        <Button type="primary" href={`/schedule/${item.id}`}>Detail</Button>
      }
    >
      <List.Item.Meta
        title={<Typography.Title level={4} title={`Round: ${item.round}`}>Round #{item.round}</Typography.Title>}
      />
    </List.Item>
  )

  return (
    <List
      itemLayout="vertical"
      dataSource={data}
      className="base-box"
      renderItem={item => (
        // start but not end
        select.includes(SCHEDULE_STATUS.START.color) && (item.isStart === SCHEDULE.START) && (item.isEnd === SCHEDULE.NOT_END) &&
        <ScheduleListItem item={item} color={SCHEDULE_STATUS.START.color} text={SCHEDULE_STATUS.START.text} />
        // end
        || select.includes(SCHEDULE_STATUS.END.color) && (item.isEnd === SCHEDULE.END) &&
        <ScheduleListItem item={item} color={SCHEDULE_STATUS.END.color} text={SCHEDULE_STATUS.END.text} />
        // not start
        || select.includes(SCHEDULE_STATUS.REMAIN.color) && (item.isStart === SCHEDULE.NOT_START) &&
        <ScheduleListItem item={item} color={SCHEDULE_STATUS.REMAIN.color} text={SCHEDULE_STATUS.REMAIN.text} />
        || undefined
      )}
    />
  )
}

export default ScheduleList
