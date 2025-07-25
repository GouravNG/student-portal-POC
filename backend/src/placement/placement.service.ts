import { Injectable } from "@nestjs/common"
import dummyPlacements from "./placement.dummyData"

@Injectable()
export class PlacementService {
  async getAllPlacement(page: number = 1, limit: number = 10) {
    let filtered = dummyPlacements

    const start = (page - 1) * limit
    const end = start + limit
    const data = filtered.slice(start, end)

    return {
      data,
      total: filtered.length,
      page,
      limit,
      hasNext: end < filtered.length,
      hasPrevious: start > 0,
    }
  }

  async getPlacementById(id: number) {
    return (
      dummyPlacements.find((placement) => placement.placementId === id) || null
    )
  }
}
