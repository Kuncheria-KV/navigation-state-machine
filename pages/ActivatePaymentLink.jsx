import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { View, Button } from "react-native";
import PaymentStackContext from "../navigation/PaymentStack/PaymentStackMachineContext";

const ActivatePaymentLink = () => {
  const { paymentStackMachine } = useContext(PaymentStackContext);
  const [, send] = useActor(paymentStackMachine);
  return (
    <View>
      <Button
        title="Go to Confirm Payment link"
        onPress={() => send("CONFIRM_PAYMENT_ACTIVATION")}
      />
    </View>
  );
};

export default ActivatePaymentLink;
