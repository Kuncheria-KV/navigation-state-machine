import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

import { CouponStackMachineContext } from "../navigation/CouponStack";
import globalStyles from "./globalStyles";

const CouponsConfirmation = () => {
  const { couponStackMachine } = useContext(CouponStackMachineContext);
  const [state, send] = useActor(couponStackMachine);
  return (
    <View style={globalStyles.container}>
      <Text
        style={globalStyles.boldTextCenter}
      >{`Are you sure you want to create coupon with code: ${state.context.couponCode}`}</Text>
      <Button
        title="Confirm create coupon"
        color="mediumseagreen"
        onPress={() => send("APPROVE_COUPON")}
      />
      <Button title="Cancel" color="tomato" onPress={() => send("CANCEL")} />
    </View>
  );
};

export default CouponsConfirmation;
