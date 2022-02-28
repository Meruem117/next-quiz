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

export interface userCheckItem {
  check: boolean,
  userInfo: userInfoItem
}

export interface userInfoItem {
  id: number,
  name: string,
  role: number,
  gender: number,
  location?: string
}