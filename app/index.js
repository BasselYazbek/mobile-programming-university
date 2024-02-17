/* import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
 */


import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { useTranslation } from 'react-i18next';
import '../localization.js';

export default function App() {
  const { t } = useTranslation();

  return (    
    <View style={styles.container}>
      <Svg width="200" height="200">
        <Rect x="50" y="50" width="100" height="100" fill="blue" />
        <Circle cx="150" cy="150" r="25" fill="red" />
      </Svg>
    <Text style={styles.text}>Yazbek</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});
