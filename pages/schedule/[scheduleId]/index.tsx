import type { NextPage } from 'next'
import ScheduleDetail from '@/components/schedule/schedule-detail'
import ScheduleContent from '@/components/schedule/schedule-content'
import type { scheduleItem } from '@/models/schedule'
import type { questionItem } from '@/models/question'
import { getScheduleList, getScheduleById } from '@/services/schedule'
import { getQuestionListBySchedule } from '@/services/question'

type propsType = {
  scheduleData: scheduleItem,
  questionList: questionItem[]
}

type contextType = {
  params: {
    scheduleId: number
  }
}

const ScheduleDetailPage: NextPage<propsType> = (props) => {
  return (
    <div className="base-x-container">
      <div className="flex flex-col w-1/2 space-y-4">
        <ScheduleDetail data={props.scheduleData} />
        <ScheduleContent schedule={props.scheduleData} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const scheduleRes = await getScheduleList()
  const scheduleList = scheduleRes.data

  return {
    fallback: false,
    paths: scheduleList.map(item => ({
      params: {
        scheduleId: item.id.toString()
      }
    }))
  }
}

export async function getStaticProps(context: contextType) {
  const scheduleId = context.params.scheduleId
  const scheduleRes = await getScheduleById(scheduleId)
  const questionRes = await getQuestionListBySchedule(scheduleRes.data.question)

  return {
    props: {
      scheduleData: scheduleRes.data,
      questionList: questionRes.data
    },
    revalidate: 3600
  }
}

export default ScheduleDetailPage
