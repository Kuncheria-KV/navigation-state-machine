import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CouponDetails from "../../pages/CouponDetails";
import CouponsConfirmation from "../../pages/CouponsConfirmation";
import CouponStackActionProvider from "./CouponStackActionProvider";

const Stack = createStackNavigator();

const CouponStack = ({ navigation }) => {
  return (
    <CouponStackActionProvider navigation={navigation}>
      <Stack.Navigator initialRouteName="CouponDetail">
        <Stack.Screen name="CouponDetail" component={CouponDetails} />
        <Stack.Screen name="ConfirmCoupon" component={CouponsConfirmation} />
      </Stack.Navigator>
    </CouponStackActionProvider>
  );
};

export default CouponStack;
