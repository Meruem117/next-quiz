import React, { useState, Fragment } from 'react'
import { List, Button, Tag, Typography } from 'antd'
import { CalendarOutlined, UserOutlined } from '@ant-design/icons'
import QuestionUploadModal from '../question-upload-modal'
import IconText from '@/components/common/icon-text'
import type { questionItem } from '@/models/question'
import type { topicItem } from '@/models/topic'
import { QUESTION_TEXT } from '@/constant'

const QuestionList: React.FC<{ data: questionItem[], topic: string, topicList: topicItem[] }> = ({ data, topic, topicList }) => {
  const [visible, setVisible] = useState<boolean>(false)

  const showModal = (): void => {
    setVisible(true)
  }

  const closeModal = (): void => {
    setVisible(false)
  }

  return (
    <Fragment>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        className="base-box"
        pagination={{
          pageSize: 5,
        }}
        footer={
          <Typography.Link onClick={showModal}>Upload your question here.</Typography.Link>
        }
        renderItem={item => (
          <List.Item
            className="p-2 rounded-md"
            actions={[
              <Tag color="blue" key={item.id}>{item.topic}</Tag>,
              <Tag color="magenta" key={item.id}>{QUESTION_TEXT[item.type]}</Tag>,
              <IconText key={item.id} icon={CalendarOutlined} text={item.updateTime.substring(0, 10)} title={`Last Update: ${item.updateTime}`} />,
              <IconText key={item.id} icon={UserOutlined} text={item.up} title={`Up: ${item.up}`} />
            ]}
            extra={
              <Button type="primary" href={`/question/${item.id}`}>Detail</Button>
            }
          >
            <List.Item.Meta
              title={<Typography.Title level={4} ellipsis={true} className="w-48" title={item.question}>{item.question}</Typography.Title>}
            />
          </List.Item>
        )}
      />
      <QuestionUploadModal topic={topic} topicList={topicList} visible={visible} closeModal={closeModal} />
    </Fragment>
  )
}

export default QuestionList
