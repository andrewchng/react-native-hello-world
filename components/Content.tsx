import { View, Text, StyleSheet } from "react-native";

export default function Content() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.content}>
        Little Lemon is a charming neighbourhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. we would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
  },
  title: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  content: {
    fontSize: 25,
    padding: 20,
    color: "white",
    textAlign: "center",
  },
});
