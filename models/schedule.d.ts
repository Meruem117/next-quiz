export interface scheduleItem {
  id: number,
  quizId: number,
  quizName: string,
  round: number,
  count: number,
  passNum: number,
  question: string,
  startTime: string,
  endTime: string,
  length: number,
  status: number,
  createTime: string
}