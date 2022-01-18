import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import Success from "../components/Success";
import { CouponStackMachineContext } from "../navigation/CouponStack";

const SuccessPage = () => {
  const { couponStackMachine } = useContext(CouponStackMachineContext);
  const [state, send] = useActor(couponStackMachine);
  return (
    <Success
      message={`Coupon ${state.context.couponCode} created`}
      onClose={() => {
        send("CLOSE");
      }}
    />
  );
};

export default SuccessPage;
