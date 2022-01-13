import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SuccessPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boldTextCenter}>Hurray you did it !!! :)</Text>
      <Button title="Close" />
    </View>
  );
};

export default SuccessPage;

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
