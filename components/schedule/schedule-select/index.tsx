import React from 'react'
import { Select, Tag } from 'antd'
import { SCHEDULE_STATUS } from '@/constant'

const options = [
  { value: SCHEDULE_STATUS.START.color, label: SCHEDULE_STATUS.START.text },
  { value: SCHEDULE_STATUS.END.color, label: SCHEDULE_STATUS.END.text },
  { value: SCHEDULE_STATUS.REMAIN.color, label: SCHEDULE_STATUS.REMAIN.text }
]

const ScheduleSelect: React.FC<{ select: string[] }> = ({ select }) => {
  return (
    <Select
      mode="multiple"
      showArrow
      tagRender={tagRender}
      value={select}
      options={options}
      className="w-full"
    />
  )
}

function tagRender(props: any) {
  const { value, label, onClose } = props
  return <Tag color={value} closable={true} onClose={onClose} className="mr-2">{label}</Tag>
}

export default ScheduleSelect
