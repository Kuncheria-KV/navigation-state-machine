import React from "react";
import { View, Text, Button } from "react-native";

const ActivatePaymentLink = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Confirm Payment link"
        onPress={() => navigation.navigate("PaymentConfirm")}
      />
    </View>
  );
};

export default ActivatePaymentLink;
