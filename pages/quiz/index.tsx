import type { NextPage } from 'next'
import QuizList from '@/components/quiz/quiz-list'
import type { quizItem } from '@/models/quiz'
import { getQuizList } from '@/services/quiz'

type propsType = {
  quizData: quizItem[]
}

const QuizPage: NextPage<propsType> = (props) => {
  // const [select, setSelect] = useState<string[]>([SCHEDULE_STATUS.START.color])

  // function handleChange(value: string[]): void {
  //   setSelect(value)
  // }

  return (
    <QuizList data={props.quizData} />
    // <div className="w-1/2 mx-auto p-2 space-y-4 rounded">
    //   <ScheduleSelect select={select} handleChange={handleChange} />
    //   <ScheduleList data={props.scheduleData} select={select} />
    // </div>
  )
}

export async function getStaticProps() {
  const quizRes = await getQuizList()

  return {
    props: {
      quizData: quizRes.data
    },
    revalidate: 3600
  }
}

export default QuizPage
