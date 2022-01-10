export interface questionItem {
  id: number,
  question: string,
  topic: string,
  type: number,
  optionA: string,
  optionB: string,
  optionC: string,
  optionD: string,
  answer: string,
  score: number,
  createTime: Date,
  updateTime: Date
}