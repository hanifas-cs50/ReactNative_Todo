import { Link } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function About() {
  return (
    <View style={styles.aboutContainer}>
      <Text style={{ fontSize: 24, textAlign: "justify" }}>
        This is hanifas-cs50's work (my work :v)
      </Text>
      <Text style={{ marginBottom: 30, fontSize: 24, textAlign: "center" }}>
        Thanks for viewing it
      </Text>
      <Text style={styles.textBeforeLink}>
        Press this link to go to my github page:{" "}
      </Text>
      <Link style={styles.textLink} href="https://github.com/hanifas-cs50/">
        Github Link
      </Link>
      <Text style={styles.textBeforeLink}>
        Or just type this link (since pressing a linked text is fishy)
      </Text>
      <Text style={styles.textLink}>https://github.com/hanifas-cs50/</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    paddingTop: 36,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  textBeforeLink: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: "center",
  },
  textLink: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#3b82f6",
  },
});
