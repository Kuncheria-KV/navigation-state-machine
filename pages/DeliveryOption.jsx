import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useActor } from "@xstate/react";
import React, { useContext, useState } from "react";
import { View, Button } from "react-native";
import DeliveryStackMachineContext from "../navigation/DeliveryStack/DeliveryStackMachineContext";

const DeliveryOption = () => {
  const { deliveryStackMachine } = useContext(DeliveryStackMachineContext);
  const [, send] = useActor(deliveryStackMachine);

  const [isPaymentActive, setIsPaymentActive] = useState(true);
  useFocusEffect(() => {
    AsyncStorageLib.getItem("PAYMENT_ACTIVE")
      .then(JSON.parse)
      .then(setIsPaymentActive);
  });
  return (
    <View>
      <Button
        title="Go to Confirm delivery"
        onPress={() => send("CONFIRM_DELIVERY_OPTION")}
      />
      {!isPaymentActive && (
        <Button
          title="Activate payment"
          onPress={() => send("ACTIVATE_PAYMENT")}
          color="green"
        />
      )}
    </View>
  );
};

export default DeliveryOption;
