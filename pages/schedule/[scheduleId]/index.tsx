import type { NextPage } from 'next'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import ScheduleDetail from '@/components/schedule/schedule-detail'
import ScheduleContent from '@/components/schedule/schedule-content'
import type { scheduleItem } from '@/models/schedule'
import type { questionItem } from '@/models/question'
import { getScheduleList, getScheduleById } from '@/services/schedule'
import { getQuestionListBySchedule } from '@/services/question'
import { getResultAttend } from '@/services/result'

type propsType = {
  scheduleData: scheduleItem,
  questionData: questionItem[]
}

type contextType = {
  params: {
    scheduleId: number
  }
}

const ScheduleDetailPage: NextPage<propsType> = (props) => {
  const { id, status } = props.scheduleData
  const userState = useAppSelector(selectUser)

  return (
    <div className="base-x-container">
      <div className="flex flex-col w-1/2 space-y-4">
        <ScheduleDetail data={props.scheduleData} />
        <ScheduleContent scheduleId={id} status={status} data={props.questionData} />
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
      questionData: questionRes.data
    },
    revalidate: 3600
  }
}

export default ScheduleDetailPage
