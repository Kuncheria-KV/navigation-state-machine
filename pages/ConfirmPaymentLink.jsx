import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { View, Button } from "react-native";
import PaymentStackContext from "../navigation/PaymentStack/PaymentStackMachineContext";

const ConfirmPaymentLink = () => {
  const { paymentStackMachine } = useContext(PaymentStackContext);
  const [, send] = useActor(paymentStackMachine);
  const handleConfirm = () => {
    AsyncStorageLib.setItem("PAYMENT_ACTIVE", "true").then(() =>
      send("CONFIRM")
    );
  };
  return (
    <View>
      <Button title="Confirm" onPress={handleConfirm} />
      <Button title="Decline" color="tomato" onPress={() => send("DECLINE")} />
    </View>
  );
};

export default ConfirmPaymentLink;
