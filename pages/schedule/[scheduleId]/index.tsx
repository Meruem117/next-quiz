import type { NextPage } from 'next'
import { Alert } from 'antd'
import { useAppSelector } from '@/app/hooks'
import { selectUser } from '@/features/user/userSlice'
import ScheduleDetail from '@/components/schedule/schedule-detail'
import QuestionInfoList from '@/components/question/question-info-list'
import type { scheduleItem } from '@/models/schedule'
import type { questionItem } from '@/models/question'
import { getScheduleList, getScheduleById } from '@/services/schedule'
import { getQuestionListBySchedule } from '@/services/question'
import { checkParticipant } from '@/services/result'
import { STATUS, IS_TEAM } from '@/constant'

type propsType = {
  scheduleData: scheduleItem,
  questionData: questionItem[],
  check: boolean
}

type contextType = {
  params: {
    scheduleId: number
  }
}

const ScheduleDetailPage: NextPage<propsType> = (props) => {
  const { status } = props.scheduleData

  return (
    <div className="base-x-container">
      <div className="flex flex-col w-1/2 space-y-4">
        <ScheduleDetail data={props.scheduleData} />
        {
          status === STATUS.END.value ?
            <QuestionInfoList data={props.questionData} />
            : <Alert
              message="Warning"
              description="This quiz round has not ended yet, you can view the question list after it ends."
              type="warning"
              showIcon
              className="shadow-md rounded-md"
            />
        }
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userState = useAppSelector(selectUser)
  //TODO ROLE TYPE CHECK
  const checkRes = await checkParticipant(scheduleId, userState.id, IS_TEAM.USER)

  return {
    props: {
      scheduleData: scheduleRes.data,
      questionData: questionRes.data,
      check: checkRes.data
    },
    revalidate: 3600
  }
}

export default ScheduleDetailPage
