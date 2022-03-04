import type { responseItem } from '@/models/base'
import type { resultItem } from '@/models/result'
import { baseUrl } from '@/constant'

export async function getResultListByParticipantId(id: number, isTeam: number): Promise<responseItem<resultItem[]>> {
  const response = await fetch(baseUrl + `/result/list?id=${id}&isTeam=${isTeam}`)
  return response.json()
}

export async function getResultWhenAttend(scheduleId: number, participantId: number, isTeam: number): Promise<responseItem<resultItem>> {
  const response = await fetch(baseUrl + `/result/attend?scheduleId=${scheduleId}&participantId=${participantId}&isTeam=${isTeam}`)
  return response.json()
}

export async function handleAttend(scheduleId: number, participantId: number, isTeam: number): Promise<resultItem | boolean> {
  const response = await fetch(`/api/attend?scheduleId=${scheduleId}&participantId=${participantId}&isTeam=${isTeam}`)
  return response.json()
}