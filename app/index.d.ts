declare interface PaginatedResponse<T>{
    data:T[]
    total: number
    pageSize: number
}