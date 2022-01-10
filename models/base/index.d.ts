export interface responseItem<T> {
  code: number,
  data: T,
  message: string
}

export interface pageRequestItem {
  pageNum: number,
  pageSize: number
}