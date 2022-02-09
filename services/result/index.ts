import type { responseItem } from '@/models/base'
import type { resultItem, attendItem } from '@/models/result'
import { baseUrl } from '@/constant'

export async function getResultListByParticipantId(id: number, isTeam: number): Promise<responseItem<resultItem[]>> {
  const response = await fetch(baseUrl + `/result/list?id=${id}&isTeam=${isTeam}`)
  return response.json()
}

export async function getResultAttend(scheduleId: number, participantId: number, isTeam: number): Promise<responseItem<resultItem>> {
  const response = await fetch(baseUrl + `/result/attend?scheduleId=${scheduleId}&participantId=${participantId}&isTeam=${isTeam}`)
  return response.json()
}