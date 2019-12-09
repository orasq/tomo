import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const Navigation = createSwitchNavigator({
  AuthStack: AuthStack,
  AppStack: AppStack
});

export default createAppContainer(Navigation);
