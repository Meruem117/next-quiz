import { responseItem } from '@/models/base'
import { scheduleItem } from '@/models/schedule'
import { baseUrl } from '@/constant'

export async function getScheduleByQuizId(quizId: number): Promise<responseItem<scheduleItem>> {
  const response = await fetch(baseUrl + '/schedule/get?quizId=' + quizId)
  return response.json()
}

export async function getScheduleList(): Promise<responseItem<scheduleItem[]>> {
  const response = await fetch(baseUrl + '/schedule/list')
  return response.json()
}

export async function getScheduleStartList(limit: number): Promise<responseItem<scheduleItem[]>> {
  const response = await fetch(baseUrl + '/schedule/start?limit=' + limit)
  return response.json()
}

export async function getScheduleEndList(limit: number): Promise<responseItem<scheduleItem[]>> {
  const response = await fetch(baseUrl + '/schedule/end?limit=' + limit)
  return response.json()
}

export async function getScheduleRemainList(limit: number): Promise<responseItem<scheduleItem[]>> {
  const response = await fetch(baseUrl + '/schedule/remain?limit=' + limit)
  return response.json()
}