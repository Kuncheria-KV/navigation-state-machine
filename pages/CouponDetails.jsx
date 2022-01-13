import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { View, Button } from "react-native";

import { CouponStackMachineContext } from "../navigation/CouponStack";

const CouponDetails = () => {
  const { couponStackMachine } = useContext(CouponStackMachineContext);
  const [, send] = useActor(couponStackMachine);
  return (
    <View>
      <Button
        title="Go to Confirm coupon"
        onPress={() => send("CONFIRM_COUPON")}
      />
      <Button
        title="Activate payment"
        onPress={() => send("ACTIVATE_PAYMENT")}
        color="green"
      />
    </View>
  );
};

export default CouponDetails;
