import { HomePage } from "./components/HomePage";

const DEFAULT_CONFIG = {
  "core.Router": [
    { path: "home", component: HomePage },
  ]
}

export const HomeModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}