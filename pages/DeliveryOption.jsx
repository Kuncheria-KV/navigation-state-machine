import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import DeliveryStackMachineContext from "../navigation/DeliveryStack/DeliveryStackMachineContext";

const DeliveryOption = () => {
  const { deliveryStackMachine } = useContext(DeliveryStackMachineContext);
  const [, send] = useActor(deliveryStackMachine);
  return (
    <View>
      <Button
        title="Go to Confirm delivery"
        onPress={() => send("CONFIRM_DELIVERY_OPTION")}
      />
      <Button
        title="Activate payment"
        onPress={() => send("ACTIVATE_PAYMENT")}
        color="green"
      />
    </View>
  );
};

export default DeliveryOption;
