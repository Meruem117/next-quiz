export interface userItem {
  id: number,
  email: string,
  name: string,
  password: string,
  gender: number,
  location: string,
  createTime: string
}

export interface userLoginItem {
  email: string,
  password: string
}

export interface userRegisterItem {
  email: string,
  name: string,
  password: string,
  gender: number,
  location?: string,
}

export interface userCheckItem {
  check: boolean,
  info: userInfoItem
}

export interface userInfoItem {
  id: number,
  name: string,
  gender?: number,
  location?: string
}