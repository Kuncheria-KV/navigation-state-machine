import React from "react";
import { View, Text, Button } from "react-native";

const ConfirmPaymentLink = ({ navigation }) => {
  return (
    <View>
      <Button title="Confirm" />
      <Button
        title="Decline"
        color="tomato"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default ConfirmPaymentLink;
