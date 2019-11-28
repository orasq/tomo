import { createAppContainer, createSwitchNavigator } from "react-navigation";

import LoginFlow from "./LoginFlow";
import AppFlow from "./AppFlow";

const Navigation = createSwitchNavigator({
  LoginFlow: LoginFlow,
  AppFlow: AppFlow
});

export default createAppContainer(Navigation);
