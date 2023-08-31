export interface IResponsePaginated<Data> {
  page: number
  results: Data
  total_page: number
  totalResults: number
}
