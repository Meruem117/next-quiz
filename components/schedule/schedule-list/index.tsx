import React from 'react'
import { List, Typography, Tag, Button } from 'antd'
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons'
import IconText from '@/components/common/icon-text'
import type { scheduleItem } from '@/models/schedule'
import { STATUS_TYPE } from '@/constant'

const ScheduleList: React.FC<{ data: scheduleItem[], select: string[] }> = ({ data, select }) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={data}
      className="base-box"
      renderItem={item => (
        select.includes(STATUS_TYPE[item.status].color) ?
          <List.Item
            className="p-2 rounded-md"
            actions={[
              <Tag key={item.id} color={STATUS_TYPE[item.status].color}>{STATUS_TYPE[item.status].text}</Tag>,
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
          : undefined
      )}
    />
  )
}

export default ScheduleList
