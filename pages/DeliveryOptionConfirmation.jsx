import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { View, Button } from "react-native";

import DeliveryStackMachineContext from "../navigation/DeliveryStack/DeliveryStackMachineContext";
import globalStyles from "./globalStyles";

const DeliveryOptionConfirmation = () => {
  const { deliveryStackMachine } = useContext(DeliveryStackMachineContext);
  const [, send] = useActor(deliveryStackMachine);
  return (
    <View style={globalStyles.container}>
      <Button
        title="Confirm delivery option"
        color="mediumseagreen"
        onPress={() => send("APPROVE_DELIVERY_OPTION")}
      />
      <Button title="Cancel" color="tomato" onPress={() => send("CANCEL")} />
    </View>
  );
};

export default DeliveryOptionConfirmation;
