import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import Success from "../components/Success";
import DeliveryStackMachineContext from "../navigation/DeliveryStack/DeliveryStackMachineContext";

const DeliverySuccessPage = () => {
  const { deliveryStackMachine } = useContext(DeliveryStackMachineContext);
  const [, send] = useActor(deliveryStackMachine);

  return (
    <Success
      message={"Delivery method enabled"}
      onClose={() => {
        send("CLOSE");
      }}
    />
  );
};

export default DeliverySuccessPage;
