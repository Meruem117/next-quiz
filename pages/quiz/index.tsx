import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import ScheduleSelect from '@/components/schedule/schedule-select'
import ScheduleList from '@/components/schedule/schedule-list'
import type { scheduleItem } from '@/models/schedule'
import { getScheduleList } from '@/services/schedule'
import { SCHEDULE_STATUS } from '@/constant'

type propsType = {
  scheduleData: scheduleItem[]
}

const QuizPage: NextPage<propsType> = (props) => {
  const [select] = useState<string[]>([SCHEDULE_STATUS.START.color])

  return (
    <div className="w-1/2 mx-auto p-2 space-y-4">
      <ScheduleSelect select={select} />
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
