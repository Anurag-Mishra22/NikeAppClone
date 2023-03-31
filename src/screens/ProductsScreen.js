import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/ProductSlice";

// import products from "../data/products";
const ProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  //this useNavigation hook is preffered
  // const navigation = useNavigation()
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            //update selected product
            dispatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Products Details");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

export default ProductScreen;
