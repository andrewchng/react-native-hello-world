import { View, Text,StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Welcome to little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    backgroundColor: "#F4CE14",
  },
  headerText: { 
    fontSize: 30, 
    color: "black", 
    textAlign:"center",
    padding: 40 },
});
