import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Success = ({ onClose, message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.boldTextCenter}>{`Hurray you did it !!! :)`}</Text>
      <Text style={styles.boldTextCenter}>{message}</Text>
      <Button title="Close" onPress={onClose} />
    </View>
  );
};

export default Success;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boldTextCenter: {
    fontWeight: "bold",
    margin: 20,
  },
});
