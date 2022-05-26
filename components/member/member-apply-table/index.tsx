import React, { useState } from 'react'
import Link from 'next/link'
import { Table, Button, Popconfirm, message } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import type { memberItem } from '@/models/member'
import { handlePass } from '@/services/member'
import { PASS, PASS_TYPE } from '@/constant'

const MemberApplyTable: React.FC<{ data: memberItem[] }> = ({ data }) => {
  const [passVisible, setPassVisible] = useState<boolean>(false)
  const [denyVisible, setDenyVisible] = useState<boolean>(false)
  const [passLoading, setPassLoading] = useState<boolean>(false)
  const [denyLoading, setDenyLoading] = useState<boolean>(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const columns: ColumnsType<memberItem> = [
    {
      title: 'Name', dataIndex: 'userName',
      render: (text: string, record: memberItem, index: number) => (
        <Link href={`/user/${record.userId}`} passHref>
          <span title={text} className="cursor-pointer hover:text-blue-600">
            {text}
          </span>
        </Link>
      )
    },
    { title: 'Apply Time', dataIndex: 'applyTime' }
  ]
  const onSelectChange = (newSelectedRowKeys: React.Key[]): void => {
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const hasSelected = selectedRowKeys.length > 0

  const checkMembership = async (pass: string): Promise<void> => {
    const ids = selectedRowKeys.join(',')
    pass === PASS.PASS ? setPassLoading(true) : setDenyLoading(true)
    const res = await handlePass({ ids, pass })
    if (res.data) {
      message.info(`${PASS_TYPE[pass].name} successfully`)
    } else {
      message.error(`Fail to ${PASS_TYPE[pass].name.toLowerCase()}`)
    }
    pass === PASS.PASS ?
      (setPassLoading(false), setPassVisible(false)) :
      (setDenyLoading(false), setDenyVisible(false))
  }

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex space-x-3">
        <Popconfirm
          title='Are you sure to pass?'
          visible={passVisible}
          onConfirm={() => checkMembership(PASS.PASS)}
          onCancel={() => setPassVisible(false)}
        >
          <Button type="primary" onClick={() => setPassVisible(true)} disabled={!hasSelected} loading={passLoading}>
            Pass
          </Button>
        </Popconfirm>
        <Popconfirm
          title='Are you sure to deny?'
          visible={denyVisible}
          onConfirm={() => checkMembership(PASS.DENIED)}
          onCancel={() => setDenyVisible(false)}
        >
          <Button type="primary" danger onClick={() => setDenyVisible(true)} disabled={!hasSelected} loading={denyLoading}>
            Deny
          </Button>
        </Popconfirm>
        <span>
          {hasSelected ? `Selected ${selectedRowKeys.length} users` : ''}
        </span>
      </div>
      <Table rowKey="id" rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  )
}

export default MemberApplyTable
