import React, { useState } from 'react'
import Link from 'next/link'
import { Table, List, Avatar, Typography, Button, Popconfirm, message } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import { CalendarOutlined } from '@ant-design/icons'
import { cloneDeep } from 'lodash'
import IconText from '@/components/common/icon-text'
import type { memberItem } from '@/models/member'
import { handlePass } from '@/services/member'

const MemberApplyTable: React.FC<{ data: memberItem[] }> = ({ data }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const columns: ColumnsType<memberItem> = [
    { title: 'Name', dataIndex: 'userName' },
    { title: 'Apply Time', dataIndex: 'applyTime' }
  ]
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const hasSelected = selectedRowKeys.length > 0

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex space-x-3">
        <Popconfirm
          title='Are you sure to pass?'
          visible={visible}
          // onConfirm={() => deleteMember(item.id, index)}
          onCancel={() => setVisible(false)}
        >
          <Button type="primary" onClick={() => setVisible(true)} disabled={!hasSelected} loading={loading}>Pass</Button>
        </Popconfirm>
        <span>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
    // <List
    //   itemLayout="horizontal"
    //   dataSource={data}
    //   pagination={{
    //     pageSize: 6,
    //   }}
    //   renderItem={(item, index) => (
    //     <List.Item
    //       className="p-2 rounded-md"
    //       actions={[
    //         <IconText key={item.id} icon={CalendarOutlined} text={item.joinTime} title={`Joined time: ${item.joinTime}`} />,
    // <Popconfirm
    //   key={item.id}
    //   title='Are you sure to pass?'
    //   visible={visible[index]}
    //   // onConfirm={() => deleteMember(item.id, index)}
    //   onCancel={() => closePopconfirm(index)}
    // >
    //   <Button key={item.id} type="link" danger onClick={() => showPopconfirm(index)}>Pass</Button>
    // </Popconfirm>
    //       ]}
    //     >
    //       <List.Item.Meta
    //         avatar={<Avatar className="bg-orange-500">{convertUsername(item.userName)}</Avatar>}
    //         title={
    //           <Link href={`/user/${item.userId}`} passHref>
    //             <Typography.Title level={4} title={item.userName} className="cursor-pointer hover:text-blue-600">
    //               {item.userName}
    //             </Typography.Title>
    //           </Link>
    //         }
    //       />
    //     </List.Item>
    //   )}
    // />
  )
}

export default MemberApplyTable
