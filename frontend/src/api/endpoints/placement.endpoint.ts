export const getAllPlacement = (page = 1, size = 6) =>
  `/placement?page=${page}&size=${size}`

export const getPlacementById = (id: number) => `/placement/${id}`
