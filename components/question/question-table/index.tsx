import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import { Table, Tag, Button, Popconfirm, message } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import QuestionUploadModal from '../question-upload-modal'
import type { questionItem } from '@/models/question'
import type { topicItem } from '@/models/topic'
import { handleDisable } from '@/services/question'
import { QUESTION_TEXT } from '@/constant'

const QuestionTable: React.FC<{ data: questionItem[], list: topicItem[] }> = ({ data, list }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const hasSelected = selectedRowKeys.length > 0
  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]): void => {
      setSelectedRowKeys(newSelectedRowKeys)
    }
  }
  const columns: ColumnsType<questionItem> = [
    {
      title: 'Question', dataIndex: 'question',
      render: (text: string, record: questionItem, index: number) => (
        <Link href={`/question/${record.id}`} passHref>
          <span title={text} className="cursor-pointer hover:text-blue-600">
            {text}
          </span>
        </Link>
      )
    },
    {
      title: 'Topic', dataIndex: 'topic',
      render: (text: string, record: questionItem, index: number) => (
        <Tag color="blue">{text}</Tag>
      )
    },
    {
      title: 'Type', dataIndex: 'type',
      render: (text: number, record: questionItem, index: number) => (
        <Tag color="magenta">{QUESTION_TEXT[text]}</Tag>
      )
    },
    { title: 'Last Update', dataIndex: 'updateTime' }
  ]

  const deleteQuestions = async (): Promise<void> => {
    const ids = selectedRowKeys.join(',')
    setLoading(true)
    const res = await handleDisable({ ids })
    if (res.data) {
      message.info('Disable successfully')
    } else {
      message.error('Fail to disable')
    }
    setLoading(false)
  }

  return (
    <Fragment>
      <div className="flex flex-col space-y-3">
        <Table rowKey="id" rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        <div className="flex space-x-3">
          <Button type="primary" onClick={() => setModalVisible(true)}>
            Add
          </Button>
          <Popconfirm
            title='Are you sure to disable?'
            visible={visible}
            onConfirm={deleteQuestions}
            onCancel={() => setVisible(false)}
          >
            <Button type="primary" danger onClick={() => setVisible(true)} disabled={!hasSelected} loading={loading}>
              Disable
            </Button>
          </Popconfirm>
          <span>
            {hasSelected ? `Selected ${selectedRowKeys.length} question(s)` : ''}
          </span>
        </div>
      </div>
      <QuestionUploadModal visible={modalVisible} closeModal={() => setModalVisible(false)} topicList={list} />
    </Fragment>
  )
}

export default QuestionTable
