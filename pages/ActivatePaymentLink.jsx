import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { View, Button } from "react-native";
import PaymentStackContext from "../navigation/PaymentStack/PaymentStackMachineContext";
import globalStyles from "./globalStyles";

const ActivatePaymentLink = ({ route }) => {
  const { paymentStackMachine } = useContext(PaymentStackContext);
  const [, send] = useActor(paymentStackMachine);
  /**
   * Either set the context at component level or handle it in PaymentStackActionProvide level
   */
  // useEffect(() => {
  //   const source = route.params?.source;
  //   const params = route.params?.params;
  //   if (source) send({ type: "SET_SOURCE", data: { source, params } });
  // }, [route]);

  return (
    <View style={globalStyles.container}>
      <Button
        title="Go to Confirm Payment link"
        onPress={() => send("CONFIRM_PAYMENT_ACTIVATION")}
      />
    </View>
  );
};

export default ActivatePaymentLink;
