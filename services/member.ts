import type { responseItem } from '@/models/base'
import type { memberItem, memberApplyItem, memberQuitItem } from '@/models/member'
import { baseUrl } from '@/constant'

export async function getTeamListByUserId(id: number): Promise<responseItem<memberItem[]>> {
  const response = await fetch(baseUrl + '/member/team?id=' + id)
  return response.json()
}

export async function getUserListByTeamId(id: number): Promise<responseItem<memberItem[]>> {
  const response = await fetch(baseUrl + '/member/user?id=' + id)
  return response.json()
}

export async function checkMembership(teamId: number, userId: number): Promise<responseItem<number>> {
  const response = await fetch(baseUrl + `/member/check?teamId=${teamId}&userId=${userId}`)
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

export async function quitMember(data: memberQuitItem): Promise<responseItem<boolean>> {
  const response = await fetch(baseUrl + '/member/quit', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function handleCheck(teamId: number, userId: number): Promise<responseItem<number>> {
  const response = await fetch(`/api/member/check?teamId=${teamId}&userId=${userId}`)
  return response.json()
}

export async function handleApply(data: memberApplyItem): Promise<responseItem<number>> {
  const response = await fetch('/api/member/apply', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function handleQuit(data: memberQuitItem): Promise<responseItem<boolean>> {
  const response = await fetch('/api/member/quit', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}
