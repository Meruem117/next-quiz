export interface userItem {
  id: number,
  email: string,
  name: string,
  password: string,
  role: number,
  gender: number,
  location: string,
  createTime: string
}

export interface userLoginItem {
  email: string,
  password: string
}

export interface userInfoItem {
  id?: number,
  email?: string,
  name?: string,
  role?: number,
  gender?: number,
  location?: string
}