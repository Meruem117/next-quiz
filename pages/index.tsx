import type { NextPage } from 'next'
import TopicList from '@/components/topic/topic-list'
import QuestionList from '@/components/question/question-list'
import ScheduleList from '@/components/schedule/schedule-list'
import type { topicItem } from '@/models/topic'
import type { questionItem } from '@/models/question'
import type { scheduleItem } from '@/models/schedule'
import { getTopicList } from '@/services/topic'
import { getQuestionListByTopic } from '@/services/question'
import { getScheduleStartList } from '@/services/schedule'
import { CONDUCTING_QUIZ_NUMBER } from '@/constant'

type propsType = {
  topicList: topicItem[],
  questionList: questionItem[],
  scheduleList: scheduleItem[]
}

const IndexPage: NextPage<propsType> = (props) => {
  return (
    <div className="flex w-full h-full space-x-6">
      {/* left */}
      <div className="flex flex-col w-2/3 h-full space-y-6">
        <TopicList data={props.topicList} />
        <QuestionList data={props.questionList} />
      </div>
      {/* right */}
      <div className="w-1/3 h-full">
        <ScheduleList data={props.scheduleList} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const topicRes = await getTopicList()
  const questionRes = await getQuestionListByTopic('Maths')
  const scheduleRes = await getScheduleStartList(CONDUCTING_QUIZ_NUMBER)

  return {
    props: {
      topicList: topicRes.data,
      questionList: questionRes.data,
      scheduleList: scheduleRes.data
    },
    revalidate: 3600
  }
}

export default IndexPage
