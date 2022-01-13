import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ActivatePaymentLink from "../../pages/ActivatePaymentLink";
import ConfirmPaymentLink from "../../pages/ConfirmPaymentLink";

const Stack = createStackNavigator();

const PaymentStack = () => {
  return (
    <Stack.Navigator initialRouteName="ActivatePayment">
      <Stack.Screen name="ActivatePayment" component={ActivatePaymentLink} />
      <Stack.Screen name="PaymentConfirm" component={ConfirmPaymentLink} />
    </Stack.Navigator>
  );
};

export default PaymentStack;
