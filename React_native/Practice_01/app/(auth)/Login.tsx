import { View, Text } from "react-native";
import { styles } from "@/styles/Auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/Theme";
export default function login() {
  return (
    <View style={styles.container}>
      <Text>login</Text>
      <View style={styles.logoContainer}>
        <Ionicons name="leaf" size={32} color={COLORS.primary} />
      </View>
      <Text style={styles.appName}>SpotLight</Text>
      <Text style={styles.tagline}>{`Don't miss anything`}</Text>
    </View>
  );
}
