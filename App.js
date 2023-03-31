import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";

import ProductScreen from "./src/screens/ProductsScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailScreen";
import ShoppingCart from "./src/screens/ShoppingCart";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
