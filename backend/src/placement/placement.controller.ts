import { Controller, Get, Param, Query } from "@nestjs/common"
import { PlacementService } from "./placement.service"

@Controller("placement")
export class PlacementController {
  constructor(private readonly placementService: PlacementService) {}

  @Get()
  getAllPlacement(@Query() query: { page?: number; size?: number }) {
    return this.placementService.getAllPlacement(query.page, query.size)
  }

  @Get(":id")
  getPlacementById(@Param() params: { id: string }) {
    return this.placementService.getPlacementById(Number(params.id))
  }
}
