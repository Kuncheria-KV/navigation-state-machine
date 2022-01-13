import React from "react";
import { View, Text, Button } from "react-native";

const DeliveryOption = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Confirm delivery"
        onPress={() => navigation.navigate("ConfirmDeliveryOption")}
      />
      <Button
        title="Activate payment"
        onPress={() =>
          navigation.navigate("Payment", { screen: "ActivatePayment" })
        }
        color="green"
      />
    </View>
  );
};

export default DeliveryOption;
