import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={require("../../assets/images/sun.png")}
          style={{ width: 200, height: 200, marginTop: 50 }}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Discover The Weather In Your City</Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 400,
            width: "70%",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Know Your Water Maps In Your Pocket Now
        </Text>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/Weather")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },
  text: {
    fontSize: 40,
    fontWeight: 800,
    width: "100%",
    marginTop: 20,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "orange",
    borderRadius: 4,
    width: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: 600,
    fontSize: 20,
    padding: 2,
    paddingTop: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
