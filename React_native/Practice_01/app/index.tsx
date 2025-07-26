import { styles } from "@/styles/Home.style";
import { Link } from "expo-router";
import { Pressable, Text, TouchableOpacity, View, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <TouchableOpacity
        onPress={() => {
          alert("Button Pressed");
        }}
        style={{ padding: 10, backgroundColor: "#ccc", borderRadius: 5 }}
      >
        <Text>Press Me</Text>
      </TouchableOpacity>
      <Pressable
        onPress={() => {
          alert("Button Pressed");
        }}
        style={{ padding: 10, backgroundColor: "#ccc", borderRadius: 5 }}
      >
        <Text>Press Me</Text>
      </Pressable>

      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 50, height: 50, marginTop: 20 }}
        width={200}
        height={200}
        resizeMode="contain"
      />
      <Text>Image above is from reactnative.dev</Text>
      <Link href="/Profile">
        <Text style={{ color: "blue", marginTop: 20 }}>Go to Profile</Text>
      </Link>
      <Link href="/Notifications">
        <Text style={{ color: "blue", marginTop: 20 }}>
          Go to Notifications
        </Text>
      </Link>
    </View>
  );
}
