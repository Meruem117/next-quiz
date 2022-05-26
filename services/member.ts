import type { passRequestItem, responseItem } from '@/models/base'
import type { memberItem, memberApplyItem, memberQuitItem } from '@/models/member'
import { baseUrl, QUIT } from '@/constant'

export async function getTeamListByUserId(id: number, pass: string, quit: number = QUIT.NOT_QUIT): Promise<responseItem<memberItem[]>> {
  const response = await fetch(baseUrl + `/member/team?id=${id}&pass=${pass}&quit=${quit}`)
  return response.json()
}

export async function getUserListByTeamId(id: number, pass: string, quit: number = QUIT.NOT_QUIT): Promise<responseItem<memberItem[]>> {
  const response = await fetch(baseUrl + `/member/user?id=${id}&pass=${pass}&quit=${quit}`)
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

export async function passMember(data: passRequestItem) {
  const response = await fetch(baseUrl + '/member/pass', {
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

export async function handlePass(data: passRequestItem): Promise<responseItem<boolean>> {
  const response = await fetch('/api/member/pass', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}