import { ScrollView, View, Text, StyleSheet } from "react-native";

const menuItemsToDisplay = [
  "Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta",
];

export default function MenuItems() {
  return (
    <ScrollView indicatorStyle={"white"} style={menuStyles.container}>
      <Text style={menuStyles.title}>View Menu</Text>
      <Text style={menuStyles.content}>{menuItemsToDisplay[0]}</Text>
    </ScrollView>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: "black",
    flex: 0.8,
  },
  title: { color: "white", fontSize: 40, flexWrap: "wrap" },
  content: { color: "#F4CE14", fontSize: 36 },
});
