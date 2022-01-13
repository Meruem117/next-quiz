import { responseItem } from '@/models/base'
import { scheduleItem } from '@/models/schedule'
import { baseUrl } from '@/constant'

export async function getScheduleById(id: number): Promise<responseItem<scheduleItem>> {
  const response = await fetch(baseUrl + '/schedule/get?id=' + id)
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