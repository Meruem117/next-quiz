import { responseItem } from '@/models/base'
import { userItem, userLoginItem } from '@/models/user'
import { baseUrl } from '@/constant'

export async function checkUserPassword(login: userLoginItem): Promise<responseItem<boolean>> {
  const response = await fetch(baseUrl + '/user/check', {
    method: 'POST',
    body: JSON.stringify(login),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function getUserById(id: number): Promise<responseItem<userItem>> {
  const response = await fetch(baseUrl + '/user/get?id=' + id)
  return response.json()
}

export async function getUserList(): Promise<responseItem<userItem[]>> {
  const response = await fetch(baseUrl + '/user/list')
  return response.json()
}