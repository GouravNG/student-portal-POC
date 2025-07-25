import {
  getAllPlacement,
  getPlacementById,
} from '../endpoints/placement.endpoint'
import { apiClient } from '../utils/axios.config'
import type { GetAllPlacements, PlacementType } from './types'

export const fn_getAllPlacement = async (page?: number, size?: number) => {
  const res = await apiClient.get<GetAllPlacements>(getAllPlacement(page, size))
  return res.data
}

export const fn_getPlacementById = async (id: number) => {
  const res = await apiClient.get<PlacementType>(getPlacementById(id))
  return res.data
}
