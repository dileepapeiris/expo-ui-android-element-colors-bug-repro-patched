import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Host, DateTimePicker } from "@expo/ui/jetpack-compose";
import { useState } from "react";

const hexDarkColor = "#1e1b16";
const rgbLightColor = "rgb(255, 0, 0)";

export default function App() {
  const [containerColor, setContainerColor] = useState(hexDarkColor);

  const toggleDarkMode = () => {
    setContainerColor((prevColor) =>
      prevColor === hexDarkColor ? rgbLightColor : hexDarkColor,
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button onPress={toggleDarkMode} title="Toggle Mode"></Button>
      <Host matchContents>
        <DateTimePicker
          displayedComponents="date"
          variant="picker"
          elementColors={{ containerColor }}
        />
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
