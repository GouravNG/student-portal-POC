import { Body, Controller, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { Auth_RequestBody } from "./index.types"

@Controller("auth")
export class Authcontroller {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  signinController(@Body() body: Auth_RequestBody) {
    return this.authService.signinService(body)
  }
}
