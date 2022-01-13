import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { View, Button } from "react-native";

import { CouponStackMachineContext } from "../navigation/CouponStack";

const CouponsConfirmation = () => {
  const { couponStackMachine } = useContext(CouponStackMachineContext);
  const [, send] = useActor(couponStackMachine);
  return (
    <View>
      <Button
        title="Confirm create coupon"
        color="green"
        onPress={() => send("APPROVE_COUPON")}
      />
      <Button title="Cancel" color="red" onPress={() => send("CANCEL")} />
    </View>
  );
};

export default CouponsConfirmation;
