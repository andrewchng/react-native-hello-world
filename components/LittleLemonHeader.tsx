import { Colors } from "@/constants/Colors";
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
    backgroundColor: Colors.primary,
  },
  headerText: { 
    fontSize: 30, 
    color: "black", 
    textAlign:"center",
    padding: 40 },
});
