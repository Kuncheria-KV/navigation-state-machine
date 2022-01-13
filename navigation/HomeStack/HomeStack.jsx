import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../pages/Home";
import HomeStackActionProvider from "./HomeStackActionProvider";

export default function HomeStack({ navigation }) {
  const Stack = createStackNavigator();
  return (
    <HomeStackActionProvider navigation={navigation}>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={Home} />
      </Stack.Navigator>
    </HomeStackActionProvider>
  );
}
