import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CouponStack } from "./CouponStack";
import { DeliveryStack } from "./DeliveryStack";
import { PaymentStack } from "./PaymentStack";
import { HomeStack } from "./HomeStack";
import SuccessPage from "../pages/SuccessPage";

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Coupon"
        component={CouponStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Delivery"
        component={DeliveryStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Success" component={SuccessPage} />
    </Stack.Navigator>
  );
};

export default RootStack;
