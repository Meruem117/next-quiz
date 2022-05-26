export interface memberItem {
  id: number,
  teamId: number,
  teamName: string,
  userId: number,
  userName: string,
  pass: string,
  quit: number,
  joinTime: string,
  applyTime: string,
  createTime: string
}

export interface memberApplyItem {
  teamId: number,
  teamName: string,
  userId: number,
  userName: string,
}

export interface memberQuitItem {
  id: number
}