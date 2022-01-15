import type { NextPage } from 'next'
import ScheduleList from '@/components/schedule/schedule-list'
import type { scheduleItem } from '@/models/schedule'
import { getScheduleStartList } from '@/services/schedule'

type propsType = {
  scheduleData: scheduleItem[]
}

const QuizPage: NextPage<propsType> = (props) => {
  return (
    <ScheduleList data={props.scheduleData} />
  )
}

export async function getStaticProps() {
  const scheduleRes = await getScheduleStartList(0)

  return {
    props: {
      scheduleData: scheduleRes.data
    },
    revalidate: 3600
  }
}

export default QuizPage
