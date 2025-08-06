import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import ThemedView from "../components/themed/ThemedView";
import ThemedText from "../components/themed/ThemedText";

export default function About() {
  return (
    <ThemedView style={styles.aboutContainer}>
      <ThemedText style={{ fontSize: 24, textAlign: "justify" }}>
        This is hanifas-cs50's work (my work :v)
      </ThemedText>
      <ThemedText style={{ fontSize: 24, textAlign: "center", marginBottom: 30 }}>
        Thanks for viewing it
      </ThemedText>
      <ThemedText style={styles.textBeforeLink}>
        Press this link to go to my github page:{" "}
      </ThemedText>
      <Link href="https://github.com/hanifas-cs50/">
        <ThemedText style={styles.textLink}>
          Github Link
        </ThemedText>
      </Link>
      <ThemedText style={styles.textBeforeLink}>
        Or just type this link (since pressing a linked text is fishy)
      </ThemedText>
      <ThemedText style={styles.textLink}>
        https://github.com/hanifas-cs50/
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    paddingTop: 36,
    paddingHorizontal: 20,
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
