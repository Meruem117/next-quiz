import type { NextPage } from 'next'
import { useState } from 'react'
import ScheduleSelect from '@/components/schedule/schedule-select'
import ScheduleList from '@/components/schedule/schedule-list'
import type { scheduleItem } from '@/models/schedule'
import { getScheduleList } from '@/services/schedule'
import { SCHEDULE_STATUS } from '@/constant'

type propsType = {
  scheduleData: scheduleItem[]
}

const QuizPage: NextPage<propsType> = (props) => {
  const [select, setSelect] = useState<string[]>([SCHEDULE_STATUS.START.color])

  function handleChange(value: string[]): void {
    setSelect(value)
  }

  return (
    <div className="w-1/2 mx-auto p-2 space-y-4">
      <ScheduleSelect select={select} handleChange={handleChange} />
      <ScheduleList data={props.scheduleData} select={select} />
    </div>
  )
}

export async function getStaticProps() {
  const scheduleRes = await getScheduleList()

  return {
    props: {
      scheduleData: scheduleRes.data
    },
    revalidate: 3600
  }
}

export default QuizPage
