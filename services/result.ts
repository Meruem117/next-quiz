import type { responseItem } from '@/models/base'
import type { resultItem } from '@/models/result'
import { baseUrl } from '@/constant'

export async function getResultById(id: number): Promise<responseItem<resultItem>> {
  const response = await fetch(baseUrl + '/result/get?id=' + id)
  return response.json()
}

export async function getResultListByParticipantId(id: number, isTeam: number): Promise<responseItem<resultItem[]>> {
  const response = await fetch(baseUrl + `/result/list?id=${id}&isTeam=${isTeam}`)
  return response.json()
}

export async function getResultWhenAttend(scheduleId: number, participantId: number, isTeam: number): Promise<responseItem<resultItem>> {
  const response = await fetch(baseUrl + `/result/attend?scheduleId=${scheduleId}&participantId=${participantId}&isTeam=${isTeam}`)
  return response.json()
}

export async function submitResult(data: resultItem): Promise<responseItem<boolean>> {
  const response = await fetch(baseUrl + '/result/submit', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function handleAttend(scheduleId: number, participantId: number, isTeam: number): Promise<responseItem<resultItem>> {
  const response = await fetch(`/api/attend?scheduleId=${scheduleId}&participantId=${participantId}&isTeam=${isTeam}`)
  return response.json()
}

export async function handleSubmit(data: resultItem): Promise<boolean> {
  const response = await fetch('/api/submit', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}