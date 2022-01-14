import React from 'react'
import Link from 'next/link'
import { List, Tag, Space, Typography } from 'antd'
import type { scheduleItem } from '@/models/schedule'

const ScheduleList: React.FC<{ data: scheduleItem[] }> = ({ data }) => {
  return (
    <div className="flex flex-col bg-white space-y-4 rounded">
      <div className="flex p-2">
        <Typography.Title level={3} className="w-11/12">Conducting Quiz</Typography.Title>
        <Typography.Text type="secondary" className="w-1/12 pt-1 cursor-pointer hover:text-blue-400">My Quiz</Typography.Text>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <Link href={`/quiz/${item.quizId}`} passHref>
            <List.Item
              className="cursor-pointer rounded group hover:shadow-lg p-4 hover:shadow-green-300 duration-150 ease-in-out"
              extra={
                <Tag color="green">Conducting</Tag>
              }
            >
              <Space direction="vertical" size="small">
                <List.Item.Meta
                  title={
                    <div className="flex space-x-3">
                      <Typography.Title
                        level={4}
                        className="group-hover:text-green-600"
                        title={`Round: ${item.round}`}
                      >{item.quizName} #{item.round}
                      </Typography.Title>
                    </div>}
                />
                <div className="flex pl-2">
                  <Typography.Text type="secondary" className="w-12">Start:</Typography.Text>
                  <Typography.Text type="secondary">{item.startTime}</Typography.Text>
                </div>
                <div className="flex pl-2">
                  <Typography.Text type="secondary" className="w-12">End:</Typography.Text>
                  <Typography.Text type="secondary">{item.endTime}</Typography.Text>
                </div>
              </Space>
            </List.Item>
          </Link>
        )}
      />
    </div>
  )
}

export default ScheduleList
