import { useActor } from "@xstate/react";
import React, { useContext, useState, useCallback, useEffect } from "react";
import { View, Button, TextInput } from "react-native";

import { CouponStackMachineContext } from "../navigation/CouponStack";
import globalStyles from "./globalStyles";

const CouponDetails = () => {
  const { couponStackMachine } = useContext(CouponStackMachineContext);
  // const [, send] = useActor(couponStackMachine);
  const [couponCode, setCouponCode] = useState("");

  const handleConfirmCoupon = useCallback(() => {
    couponStackMachine.send({
      type: "CONFIRM_COUPON",
      data: { couponCode },
    });
  }, [couponCode]);

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Enter coupon code"
        value={couponCode}
        onChangeText={(value) => setCouponCode(value)}
      />
      <Button title="Go to Confirm coupon" onPress={handleConfirmCoupon} />
      <Button
        title="Activate payment"
        onPress={() => send("ACTIVATE_PAYMENT")}
        color="green"
      />
    </View>
  );
};

export default CouponDetails;
