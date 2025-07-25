import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { DelayInterceptor } from "./utils/interceptor"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.useGlobalInterceptors(new DelayInterceptor())
  await app.listen(5000, () => {
    console.log("Service running on port 5000")
  })
}
bootstrap()
