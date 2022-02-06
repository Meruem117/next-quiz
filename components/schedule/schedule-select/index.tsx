import React, { ReactElement } from 'react'
import { Select, Tag } from 'antd'
import { STATUS } from '@/constant'

const ScheduleSelect: React.FC<{ select: string[], handleChange: (value: string[]) => void }> = ({ select, handleChange }) => {
  const options = [
    { value: STATUS.START.color, label: STATUS.START.text },
    { value: STATUS.END.color, label: STATUS.END.text },
    { value: STATUS.NOT_START.color, label: STATUS.NOT_START.text }
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
