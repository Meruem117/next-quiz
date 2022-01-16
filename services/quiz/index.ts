import { responseItem } from '@/models/base'
import { quizItem } from '@/models/quiz'
import { baseUrl } from '@/constant'

export async function getQuizById(id: number): Promise<responseItem<quizItem>> {
  const response = await fetch(baseUrl + '/quiz/get?id=' + id)
  return response.json()
}

export async function getQuizList(): Promise<responseItem<quizItem[]>> {
  const response = await fetch(baseUrl + '/quiz/list')
  return response.json()
}