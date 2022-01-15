import React, { ReactElement } from 'react'
import { List, Button, Typography, Tag } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { scheduleItem } from '@/models/schedule'
import { SCHEDULE_START_TYPE, SCHEDULE_END_TYPE } from '@/constant'

const ScheduleList: React.FC<{ data: scheduleItem[] }> = ({ data }) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={data}
      className="w-1/2 mx-auto p-2 shadow-xl bg-white"
      pagination={{
        pageSize: 2,
      }}
      footer={
        <a>My Quiz</a>
      }
      renderItem={item => (
        (item.isStart === SCHEDULE_START_TYPE.START) && (item.isEnd === SCHEDULE_END_TYPE.NOT_END) &&
        <ScheduleListItem item={item} color="green" text="Start" />
        || (item.isStart === SCHEDULE_START_TYPE.NOT_START) &&
        <ScheduleListItem item={item} color="magenta" text="Remain" />
        || (item.isEnd === SCHEDULE_END_TYPE.END) &&
        <ScheduleListItem item={item} color="red" text="End" />
      )}
    />
  )
}

const ScheduleListItem = ({ item, color, text }: { item: scheduleItem, color: string, text: string }): ReactElement => (
  <List.Item
    className="p-2 rounded bg-white"
    extra={
      <Button type="default" href={`/quiz/${item.quizId}`}>Detail</Button>
    }
    actions={[
      <Tag key={item.id} color={color}>{text}</Tag>,
      <IconText key={item.id} icon={ClockCircleOutlined} text={item.startTime.substring(0, 10)} title={`Start at: ${item.startTime}`} />
    ]}
  >
    <List.Item.Meta
      title={<Typography.Title level={4} title={`Round: ${item.round}`}>{item.quizName} #{item.round}</Typography.Title>}
    />
  </List.Item>
)

export default ScheduleList
