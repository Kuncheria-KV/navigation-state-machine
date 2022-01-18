import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import globalStyles from "../pages/globalStyles";

const Success = ({ onClose, message }) => {
  return (
    <View style={globalStyles.container}>
      <Text
        style={globalStyles.boldTextCenter}
      >{`Hurray you did it !!! :)`}</Text>
      <Text style={globalStyles.boldTextCenter}>{message}</Text>
      <Button title="Close" onPress={onClose} />
    </View>
  );
};

export default Success;
