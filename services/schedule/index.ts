import { responseItem } from '@/models/base'
import { scheduleItem } from '@/models/schedule'
import { baseUrl } from '@/constant'

export async function getScheduleListByQuizId(quizId: number): Promise<responseItem<scheduleItem[]>> {
  const response = await fetch(baseUrl + '/schedule/get?quizId=' + quizId)
  return response.json()
}

export async function getScheduleList(): Promise<responseItem<scheduleItem[]>> {
  const response = await fetch(baseUrl + '/schedule/list')
  return response.json()
}

export async function getScheduleStartList(): Promise<responseItem<scheduleItem[]>> {
  const response = await fetch(baseUrl + '/schedule/start')
  return response.json()
}

export async function getScheduleEndList(): Promise<responseItem<scheduleItem[]>> {
  const response = await fetch(baseUrl + '/schedule/end')
  return response.json()
}

export async function getScheduleRemainList(): Promise<responseItem<scheduleItem[]>> {
  const response = await fetch(baseUrl + '/schedule/remain')
  return response.json()
}