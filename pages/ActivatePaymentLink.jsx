import { useActor } from "@xstate/react";
import React, { useContext, useEffect } from "react";
import { View, Button } from "react-native";
import PaymentStackContext from "../navigation/PaymentStack/PaymentStackMachineContext";

const ActivatePaymentLink = ({ route }) => {
  const { paymentStackMachine } = useContext(PaymentStackContext);
  const [, send] = useActor(paymentStackMachine);
  useEffect(() => {
    const source = route.params?.source;
    const params = route.params?.params;
    if (source) send({ type: "SET_SOURCE", data: { source, params } });
  }, [route]);

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
