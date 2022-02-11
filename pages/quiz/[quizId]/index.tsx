import type { NextPage } from 'next'
import { useState } from 'react'
import QuizInfo from '@/components/quiz/quiz-info'
import ScheduleSelect from '@/components/schedule/schedule-select'
import ScheduleList from '@/components/schedule/schedule-list'
import type { quizItem } from '@/models/quiz'
import type { scheduleItem } from '@/models/schedule'
import { getQuizList, getQuizById } from '@/services/quiz'
import { getScheduleListByQuizId } from '@/services/schedule'
import { STATUS } from '@/constant'

type propsType = {
  quizData: quizItem,
  scheduleData: scheduleItem[]
}

type contextType = {
  params: {
    quizId: number
  }
}

const QuizDetailPage: NextPage<propsType> = (props) => {
  const [select, setSelect] = useState<string[]>([STATUS.START.color, STATUS.END.color, STATUS.NOT_START.color])

  function handleChange(value: string[]): void {
    setSelect(value)
  }

  return (
    <div className="base-x-container">
      <div style={{ width: '12.5%' }}>
        <QuizInfo data={props.quizData} />
      </div>
      <div className="flex flex-col w-2/5 space-y-4">
        <ScheduleSelect select={select} handleChange={handleChange} />
        <ScheduleList data={props.scheduleData} select={select} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const quizRes = await getQuizList()
  const quizList = quizRes.data

  return {
    fallback: false,
    paths: quizList.map(item => ({
      params: {
        quizId: item.id.toString()
      }
    }))
  }
}

export async function getStaticProps(context: contextType) {
  const quizId = context.params.quizId
  const quizRes = await getQuizById(quizId)
  const scheduleRes = await getScheduleListByQuizId(quizId)

  return {
    props: {
      quizData: quizRes.data,
      scheduleData: scheduleRes.data
    },
    revalidate: 3600
  }
}

export default QuizDetailPage
