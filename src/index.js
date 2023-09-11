import HomePage from "./pages/HomePage";
import HomePageContainer from "./components/HomePageContainer";
import messages_en from "./translations/en.json";

const DEFAULT_CONFIG = {
  "translations": [{ key: "en", messages: messages_en }],
  "core.Router": [{ path: "home", component: HomePage }],
  "home.HomePage.Container": HomePageContainer,
  "home.HomePage.Blocks": [],
};

export const HomeModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...((cfg && cfg["fe-home"]) || {}) };
};
