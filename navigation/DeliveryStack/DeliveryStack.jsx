import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DeliveryOption from "../../pages/DeliveryOption";
import DeliveryOptionConfirmation from "../../pages/DeliveryOptionConfirmation";
import DeliveryStackActionProvider from "./DeliveryStackActionProvider";
import DeliverySuccessPage from "../../pages/DeliverySuccessPage";

const Stack = createStackNavigator();
const DeliveryStack = ({ navigation }) => {
  return (
    <DeliveryStackActionProvider navigation={navigation}>
      <Stack.Navigator initialRouteName="DeliveryOption">
        <Stack.Screen name="DeliveryOption" component={DeliveryOption} />
        <Stack.Screen
          name="ConfirmDeliveryOption"
          component={DeliveryOptionConfirmation}
        />
        <Stack.Screen name="Success" component={DeliverySuccessPage} />
      </Stack.Navigator>
    </DeliveryStackActionProvider>
  );
};

export default DeliveryStack;
