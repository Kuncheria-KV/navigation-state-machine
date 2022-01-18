import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { View, Button } from "react-native";
import PaymentStackContext from "../navigation/PaymentStack/PaymentStackMachineContext";

const ConfirmPaymentLink = () => {
  const { paymentStackMachine } = useContext(PaymentStackContext);
  const [, send] = useActor(paymentStackMachine);
  return (
    <View>
      <Button title="Confirm" />
      <Button title="Decline" color="tomato" onPress={() => send("DECLINE")} />
    </View>
  );
};

export default ConfirmPaymentLink;
