import React, { useEffect } from "react";
import { useInterpret } from "@xstate/react";
import homeStackStateMachine from "./HomeStateMachine";
import HomeStackContext from "./HomeStackMachineContext";

const HomeStackActionProvider = ({ navigation, children }) => {
  // useEffect(() => {
  //   navigation.addListener("beforeRemove", (e) => {
  //     console.log("back navigation");
  //   });
  // }, []);
  const homeStackMachine = useInterpret(homeStackStateMachine, {
    services: {
      navigateToCoupons: async () => {
        navigation.navigate("Coupon", { screen: "CouponDetail" });
        Promise.resolve();
      },
      navigateToDelivery: async () => {
        navigation.navigate("Delivery", { screen: "DeliveryOption" });
      },
    },
  });

  return (
    <HomeStackContext.Provider value={{ homeStackMachine }}>
      {children}
    </HomeStackContext.Provider>
  );
};

export default HomeStackActionProvider;
