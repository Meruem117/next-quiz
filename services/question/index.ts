import type { responseItem } from '@/models/base'
import type { questionItem } from '@/models/question'
import { baseUrl } from '@/constant'

export async function getQuestionById(id: number): Promise<responseItem<questionItem>> {
  const response = await fetch(baseUrl + '/question/get?id=' + id)
  return response.json()
}

export async function getQuestionListByTopic(topic: string): Promise<responseItem<questionItem[]>> {
  const response = await fetch(baseUrl + '/question/list?topic=' + topic)
  return response.json()
}

export async function getQuestionListBySchedule(question: string): Promise<responseItem<questionItem[]>> {
  const response = await fetch(baseUrl + '/question/schedule?question=' + question)
  return response.json()
}