export interface userItem {
  id: number,
  email: string,
  name: string,
  password: string,
  role: string,
  team: userTeamItem,
  createTime: Date
}

export interface userDaoItem {
  id: number,
  email: string,
  name: string,
  password: string,
  role: number,
  team: string,
  createTime: Date
}

export interface userTeamItem {
  [key: string]: number
}