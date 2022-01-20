import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ActivatePaymentLink from "../../pages/ActivatePaymentLink";
import ConfirmPaymentLink from "../../pages/ConfirmPaymentLink";
import PaymentStackActionProvider from "./PaymentStackActionProvider";

const Stack = createStackNavigator();

const PaymentStack = ({ navigation, route }) => {
  return (
    <PaymentStackActionProvider navigation={navigation} route={route}>
      <Stack.Navigator initialRouteName="ActivatePayment">
        <Stack.Screen name="ActivatePayment" component={ActivatePaymentLink} />
        <Stack.Screen name="PaymentConfirm" component={ConfirmPaymentLink} />
      </Stack.Navigator>
    </PaymentStackActionProvider>
  );
};

export default PaymentStack;
