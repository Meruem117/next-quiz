import React from 'react'
import type { quizItem } from '@/models/quiz'
import type { scheduleItem } from '@/models/schedule'

const QuizDetail: React.FC<{ quiz: quizItem, schedule: scheduleItem[] }> = ({ quiz, schedule }) => {
  return (
    <div className="flex mx-auto bg-white">
      <div>{quiz.creator}</div>
    </div>
  )
}

export default QuizDetail
