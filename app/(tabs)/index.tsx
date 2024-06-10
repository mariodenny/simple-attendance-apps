import { Text, View,StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.homeContainer}>
      <Text>Home Screen</Text>
      <Link href='/details'>Details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
