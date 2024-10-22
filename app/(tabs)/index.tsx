import Content from "@/components/Content";
import Footer from "@/components/footer";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import MenuItems from "@/components/MenuItems";
import { Colors } from "@/constants/Colors";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <>
      <View style={styles.headerContainer}>
        <LittleLemonHeader />
        <MenuItems />
        {/* <Content></Content> */}
      </View>
      <View style={styles.navContainer}>
        <Link href="/about" style={styles.button}>
          Go to About screen
        </Link>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  footerContainer: { backgroundColor: "#495E57" },
  navContainer : {
    flex : 0.2,
    alignItems : "center",
    backgroundColor: '#25292e',
    justifyContent : "center"
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
