import { useActor } from "@xstate/react";
import React, { useContext, useEffect } from "react";
import { Button } from "react-native";
import { HomeStackContext } from "../navigation/HomeStack";

const Home = () => {
  const { homeStackMachine } = useContext(HomeStackContext);
  const [, send] = useActor(homeStackMachine);

  return (
    <>
      <Button title="Create coupon" onPress={() => send("CREATE_COUPON")} />
      <Button
        title="Enable delivery option"
        onPress={() => send("ENABLE_DELIVERY")}
      />
    </>
  );
};

export default Home;
