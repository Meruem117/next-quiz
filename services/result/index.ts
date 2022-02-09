import type { responseItem } from '@/models/base'
import type { resultItem, attendItem } from '@/models/result'
import { baseUrl } from '@/constant'

export async function getResultListByParticipantId(id: number, isTeam: number): Promise<responseItem<resultItem>> {
  const response = await fetch(baseUrl + `/result/list?id=${id}&isTeam=${isTeam}`)
  return response.json()
}

export async function getAttendResult(data: attendItem): Promise<responseItem<resultItem>> {
  const response = await fetch(baseUrl + '/result/attend', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function handleAttend(data: attendItem): Promise<resultItem> {
  const response = await fetch('/api/attend', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}