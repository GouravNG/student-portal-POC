import { Controller, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"

@Controller("auth")
export class Authcontroller {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  signinController() {
    return this.authService.signinService()
  }
}
