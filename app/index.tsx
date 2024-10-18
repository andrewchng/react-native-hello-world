import Content from "@/components/Content";
import Footer from "@/components/footer";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
    <View
      style={styles.headerContainer}>
      <LittleLemonHeader />
      <Content></Content>
    </View>

    <View style={styles.footerContainer}>
      <Footer />
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  headerContainer :{
    flex: 1,
    backgroundColor: '#495E57',
  },
  footerContainer: { backgroundColor: '#495E57' }
});
