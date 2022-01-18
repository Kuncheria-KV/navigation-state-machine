import React from "react";
import { useInterpret } from "@xstate/react";
import paymentStackStateMachine from "./PaymentStateMachine";
import PaymentStackContext from "./PaymentStackMachineContext";

const PaymentStackActionProvider = ({ navigation, children }) => {
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
    },
  });

  return (
    <PaymentStackContext.Provider value={{ paymentStackMachine }}>
      {children}
    </PaymentStackContext.Provider>
  );
};

export default PaymentStackActionProvider;
