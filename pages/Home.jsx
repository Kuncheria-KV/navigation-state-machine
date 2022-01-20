import { useActor } from "@xstate/react";
import React, { useContext, useEffect } from "react";
import { Button, View } from "react-native";
import { HomeStackContext } from "../navigation/HomeStack";
import globalStyles from "./globalStyles";

const Home = () => {
  const { homeStackMachine } = useContext(HomeStackContext);
  const [, send] = useActor(homeStackMachine);

  return (
    <View style={globalStyles.container}>
      <Button title="Create coupon" onPress={() => send("CREATE_COUPON")} />
      <Button
        title="Enable delivery option"
        onPress={() => send("ENABLE_DELIVERY")}
      />
    </View>
  );
};

export default Home;
