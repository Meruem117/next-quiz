import React from 'react'
import type { quizItem } from '@/models/quiz'
import type { scheduleItem } from '@/models/schedule'

const QuizDetail: React.FC<{
  data: {
    quizInfo: quizItem,
    scheduleInfo: scheduleItem
  }
}> = ({ data }) => {
  return (
    <div>
      {data.quizInfo.topic}
      {data.scheduleInfo.question}
    </div>
  )
}

export default QuizDetail
