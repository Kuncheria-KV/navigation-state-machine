import React from "react";
import { useInterpret } from "@xstate/react";
import paymentStackStateMachine from "./PaymentStateMachine";
import PaymentStackContext from "./PaymentStackMachineContext";

const PaymentStackActionProvider = ({ navigation, route, children }) => {
  const paymentStackMachine = useInterpret(paymentStackStateMachine, {
    services: {
      navigateToConfirmPayment: async () => {
        navigation.navigate("PaymentConfirm");
        Promise.resolve();
      },
      navigateToActivatePayment: async () => {
        navigation.navigate("ActivatePayment");
        Promise.resolve();
      },
      navigateBackToSource: async (context) => {
        navigation.navigate(context.source, context.params);
        Promise.resolve();
      },
    },
    context: {
      source: route.params?.params?.source,
      params: route.params?.params?.params,
    },
  });

  return (
    <PaymentStackContext.Provider value={{ paymentStackMachine }}>
      {children}
    </PaymentStackContext.Provider>
  );
};

export default PaymentStackActionProvider;
