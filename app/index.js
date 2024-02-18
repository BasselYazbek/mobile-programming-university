/* import React from 'react';
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
 */

import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { useTranslation } from 'react-i18next';
import i18next from '../localization'; // Import i18next instance

export default function App() {
  const { t } = useTranslation();
  
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    i18next.changeLanguage(language);
  };

  return (
    <View style={styles.container}>
      <Svg width="200" height="200">
        <Rect x="50" y="50" width="100" height="100" fill="blue" />
        <Circle cx="150" cy="150" r="25" fill="red" />
      </Svg>
      <Text style={styles.text}>{t('hello_world')}</Text> {/* Use translated string */}
      <Text style={styles.text}>{t('last_name')}</Text> {/* Use translated string */}
      <Text style={styles.text}>{t('greeting')}</Text> {/* Use translated string */}
      <Text style={styles.text}>{t('button_text')}</Text> {/* Use translated string */}
      

      {currentLanguage === 'en' ? (
        <Image
          source={require('../image/usa_flag.jpg')} // Path to the English flag image
          style={{ width: 100, height: 50 }}
        />
      ) : (
        <Image
          source={require('../image/ukraine_flag.jpg')} // Path to the Ukrainian flag image
          style={{ width: 100, height: 50 }}
        />
      )}

      {/* Conditionally Display Coat of Arms Based on Language */}
      {currentLanguage === 'en' ? (
        <Image
          source={require('../image/usa_coat.jpg')} // Path to the English coat of arms image
          style={{ width: 100, height: 100 }}
        />
      ) : (
        <Image
          source={require('../image/ukraine_coat.jpg')} // Path to the Ukrainian coat of arms image
          style={{ width: 100, height: 100 }}
        />
      )}

      <Button title="Switch to English" onPress={() => changeLanguage('en')} />
      <Button title="Switch to Ukrainian" onPress={() => changeLanguage('uk')} />
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