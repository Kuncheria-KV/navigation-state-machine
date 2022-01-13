import React from "react";
import { useInterpret } from "@xstate/react";

import couponStackStateMachine from "./CouponStateMachine";
import CouponStackMachineContext from "./CouponStackMachineContext";

const CouponStackActionProvider = ({ navigation, children }) => {
  const couponStackMachine = useInterpret(couponStackStateMachine, {
    services: {
      navigateToPayment: async () => {
        navigation.navigate("Payment", { screen: "ActivatePayment" });
        Promise.resolve();
      },
      navigateToConfirmCoupon: async () => {
        navigation.navigate("ConfirmCoupon");
        Promise.resolve();
      },
      navigateToHome: () => {
        navigation.navigate("Home", { screen: "HomePage" });
        Promise.resolve();
      },
      callCreateCoupon: async () => {
        // TODO : Print coupon data from context
        console.log("!! Calling API !!");
        Promise.resolve();
      },
    },
  });

  return (
    <CouponStackMachineContext.Provider value={{ couponStackMachine }}>
      {children}
    </CouponStackMachineContext.Provider>
  );
};

export default CouponStackActionProvider;
