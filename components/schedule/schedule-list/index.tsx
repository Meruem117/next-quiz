import React, { ReactElement, Fragment } from 'react'
import Link from 'next/link'
import { List, Typography, Tag } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { scheduleItem } from '@/models/schedule'
import { SCHEDULE_TYPE, SCHEDULE_STATUS } from '@/constant'

const ScheduleList: React.FC<{ data: scheduleItem[], select: string[] }> = ({ data, select }) => {
  const ScheduleListItem = ({ item, color, text }: { item: scheduleItem, color: string, text: string }): ReactElement => (
    <Link href={`/quiz/${item.quizId}`} passHref>
      <List.Item
        className="p-2 rounded group hover:bg-gray-100 hover:shadow-lg cursor-pointer"
        actions={[
          <Tag key={item.id} color={color}>{text}</Tag>,
          <IconText key={item.id} icon={ClockCircleOutlined} text={item.startTime} title={`Start at: ${item.startTime}`} />
        ]}
      >
        <List.Item.Meta
          title={
            <Typography.Title
              level={4}
              title={`Round: ${item.round}`}
              className="group-hover:text-blue-500"
            >{item.quizName} #{item.round}
            </Typography.Title>
          }
        />
      </List.Item>
    </Link>
  )

  return (
    <List
      itemLayout="vertical"
      dataSource={data}
      className="shadow-xl bg-white p-2 rounded"
      pagination={{
        pageSize: 10,
      }}
      renderItem={item => (
        // start but not end
        select.includes(SCHEDULE_STATUS.START.color) && (item.isStart === SCHEDULE_TYPE.START) && (item.isEnd === SCHEDULE_TYPE.NOT_END) &&
        <ScheduleListItem item={item} color={SCHEDULE_STATUS.START.color} text={SCHEDULE_STATUS.START.text} />
        // end
        || select.includes(SCHEDULE_STATUS.END.color) && (item.isEnd === SCHEDULE_TYPE.END) &&
        <ScheduleListItem item={item} color={SCHEDULE_STATUS.END.color} text={SCHEDULE_STATUS.END.text} />
        // not start
        || select.includes(SCHEDULE_STATUS.REMAIN.color) && (item.isStart === SCHEDULE_TYPE.NOT_START) &&
        <ScheduleListItem item={item} color={SCHEDULE_STATUS.REMAIN.color} text={SCHEDULE_STATUS.REMAIN.text} />
        || <Fragment />
      )}
    />
  )
}

export default ScheduleList
