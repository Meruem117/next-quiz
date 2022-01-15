import React, { ReactElement } from 'react'
import { List, Button, Typography, Tag } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { scheduleItem } from '@/models/schedule'
import { SCHEDULE_TYPE, SCHEDULE_STATUS } from '@/constant'

const ScheduleList: React.FC<{ data: scheduleItem[], select: string[] }> = ({ data, select }) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={data}
      className="shadow-xl bg-white p-2"
      pagination={{
        pageSize: 10,
      }}
      footer={
        <a>My Quiz</a>
      }
      renderItem={item => (
        // end
        select.includes(SCHEDULE_STATUS.END.color) && (item.isEnd === SCHEDULE_TYPE.END) &&
        <ScheduleListItem item={item} color={SCHEDULE_STATUS.END.color} text={SCHEDULE_STATUS.END.text} />
        // not start
        || select.includes(SCHEDULE_STATUS.REMAIN.color) && (item.isStart === SCHEDULE_TYPE.NOT_START) &&
        <ScheduleListItem item={item} color={SCHEDULE_STATUS.REMAIN.color} text={SCHEDULE_STATUS.REMAIN.text} />
        // start but not end
        || select.includes(SCHEDULE_STATUS.START.color) && (item.isStart === SCHEDULE_TYPE.START) && (item.isEnd === SCHEDULE_TYPE.NOT_END) &&
        <ScheduleListItem item={item} color={SCHEDULE_STATUS.START.color} text={SCHEDULE_STATUS.START.text} />
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
      <IconText key={item.id} icon={ClockCircleOutlined} text={item.startTime} title={`Start at: ${item.startTime}`} />
    ]}
  >
    <List.Item.Meta
      title={<Typography.Title level={4} title={`Round: ${item.round}`}>{item.quizName} #{item.round}</Typography.Title>}
    />
  </List.Item>
)

export default ScheduleList
