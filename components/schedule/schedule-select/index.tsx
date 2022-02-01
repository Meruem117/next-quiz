import React, { ReactElement } from 'react'
import { Select, Tag } from 'antd'
import { SCHEDULE_STATUS } from '@/constant'

const ScheduleSelect: React.FC<{ select: string[], handleChange: (value: string[]) => void }> = ({ select, handleChange }) => {
  const options = [
    { value: SCHEDULE_STATUS.START.color, label: SCHEDULE_STATUS.START.text },
    { value: SCHEDULE_STATUS.END.color, label: SCHEDULE_STATUS.END.text },
    { value: SCHEDULE_STATUS.REMAIN.color, label: SCHEDULE_STATUS.REMAIN.text }
  ]

  function onChange(value: string[]): void {
    handleChange(value)
  }

  function tagRender(props: any): ReactElement {
    const { value, label, onClose } = props
    return <Tag color={value} closable={true} onClose={onClose} className="mr-2 text-base py-0.5">{label}</Tag>
  }

  return (
    <Select
      mode="multiple"
      showArrow
      tagRender={tagRender}
      value={select}
      options={options}
      onChange={onChange}
      className="w-full shadow-md"
    />
  )
}

export default ScheduleSelect
