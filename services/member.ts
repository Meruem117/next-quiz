import type { responseItem } from '@/models/base'
import type { memberItem, memberApplyItem } from '@/models/member'
import { baseUrl } from '@/constant'

export async function getTeamListByUserId(id: number): Promise<responseItem<memberItem[]>> {
  const response = await fetch(baseUrl + '/member/team?id=' + id)
  return response.json()
}

export async function getUserListByTeamId(id: number): Promise<responseItem<memberItem[]>> {
  const response = await fetch(baseUrl + '/member/user?id=' + id)
  return response.json()
}

export async function addMember(data: memberApplyItem): Promise<responseItem<number>> {
  const response = await fetch(baseUrl + '/member/add', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function handleApply(data: memberApplyItem): Promise<responseItem<number>> {
  const response = await fetch('/api/apply', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}