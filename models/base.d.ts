export interface responseItem<T> {
  code: number,
  data: T,
  message: string
}

export interface getRequestItem<T> {
  method: string,
  query: T
}

export interface postRequestItem<T> {
  method: string,
  body: T
}

export interface pageDataItem<T> {
  records: T,
  total: number,
  size: number,
  current: number,
  pages: number
}

export interface pageResponseItem<T> {
  code: number,
  data: pageDataItem<T>,
  message: string
}

export interface pageRequestItem {
  pageNum: number,
  pageSize: number
}