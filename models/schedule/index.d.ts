export interface scheduleItem {
  id: number,
  quizId: number,
  quizName: string,
  round: number,
  question: string,
  startTime: string,
  endTime: string,
  isStart: number,
  isEnd: number
}