export interface memberItem {
  id: number,
  teamId: number,
  teamName: string,
  userId: number,
  userName: string,
  pass: string,
  joinTime: string,
  createTime: string
}

export interface memberApplyItem {
  teamId: number,
  teamName: string,
  userId: number,
  userName: string,
}