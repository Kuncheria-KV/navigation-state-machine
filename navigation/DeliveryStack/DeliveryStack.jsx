import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DeliveryOption from "../../pages/DeliveryOption";
import DeliveryOptionConfirmation from "../../pages/DeliveryOptionConfirmation";

const Stack = createStackNavigator();
const DeliveryStack = () => {
  return (
    <Stack.Navigator initialRouteName="DeliveryOption">
      <Stack.Screen name="DeliveryOption" component={DeliveryOption} />
      <Stack.Screen
        name="ConfirmDeliveryOption"
        component={DeliveryOptionConfirmation}
      />
    </Stack.Navigator>
  );
};

export default DeliveryStack;
