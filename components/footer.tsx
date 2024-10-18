import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>All rights reserved by, Little Lemon 2022</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
      backgroundColor: Colors.primary,
      marginBottom: 10,

    },
    footerText: {
      fontSize: 18,
      color:'black',
      textAlign: 'center'
    }
  });