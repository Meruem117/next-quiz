export interface scheduleItem {
  id: number,
  quizId: number,
  quizName: string,
  round: number,
  count: number,
  question: string,
  startTime: string,
  length: number,
  isStart: number,
  isEnd: number
}