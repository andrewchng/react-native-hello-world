import Content from "@/components/Content";
import FeedbackForm from "@/components/FeedbackForm";
import LittleLemonFooter from "@/components/LittleLemonFooter";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import LoginScreen from "@/components/LoginScreen";
import MenuItems from "@/components/MenuItems";
import WelcomeScreen from "@/components/WelcomeScreen";
import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
    <View
      style={styles.headerContainer}>
      <LittleLemonHeader />
      {/* <MenuItems/> */}
      <WelcomeScreen/>
      <LoginScreen/>
      {/* <FeedbackForm></FeedbackForm> */}
    </View>
   <View style={styles.footerContainer}>
      <LittleLemonFooter />
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
