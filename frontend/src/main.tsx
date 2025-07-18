import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Providers from "./components/Providers.tsx"
import BaseRouter from "./router/base.route.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>{BaseRouter()}</Providers>
  </StrictMode>
)
