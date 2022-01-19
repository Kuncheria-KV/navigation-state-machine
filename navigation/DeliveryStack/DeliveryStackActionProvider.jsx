import React from "react";
import { useInterpret } from "@xstate/react";

import deliveryStackStateMachine from "./DeliveryStateMachine";
import DeliveryStackMachineContext from "./DeliveryStackMachineContext";

const DeliveryStackActionProvider = ({ navigation, children }) => {
  const deliveryStackMachine = useInterpret(deliveryStackStateMachine, {
    services: {
      navigateToPayment: async () => {
        navigation.navigate("Payment", {
          screen: "ActivatePayment",
          params: { source: "Delivery", params: { screen: "DeliveryOption" } },
        });
        Promise.resolve();
      },
      navigateToConfirmDeliveryOption: async () => {
        navigation.navigate("Delivery", { screen: "ConfirmDeliveryOption" });
        Promise.resolve();
      },
      navigateToHome: async () => {
        navigation.navigate("Home", { screen: "HomePage" });
        Promise.resolve();
      },
      navigateToSuccess: async () => {
        navigation.navigate("Success");
        Promise.resolve();
      },
      callEnableDeliveryOption: async () => {
        // TODO : Print delivery option data from context
        console.log("!! Calling API !!");
        Promise.resolve();
      },
    },
  });

  return (
    <DeliveryStackMachineContext.Provider value={{ deliveryStackMachine }}>
      {children}
    </DeliveryStackMachineContext.Provider>
  );
};

export default DeliveryStackActionProvider;
