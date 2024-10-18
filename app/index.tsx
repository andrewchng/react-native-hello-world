import Content from "@/components/Content";
import Footer from "@/components/footer";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import MenuItems from "@/components/MenuItems";
import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
    <View
      style={styles.headerContainer}>
      <LittleLemonHeader />
      <MenuItems/>
      {/* <Content></Content> */}
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
    backgroundColor: Colors.background,
  },
  footerContainer: { backgroundColor: '#495E57' }
});
