import { Module } from "@nestjs/common"
import { AuthModule } from "./auth/auth.module"
import { PlacementModule } from "./placement/placement.module"

@Module({
  imports: [AuthModule, PlacementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
