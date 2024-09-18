// index.tsx (HomeScreen)
import React from 'react';
import { Text, View, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; // Use Link for navigation

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={require('@/assets/images/bg.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hello World!</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome to Faithify ✟</Text>
          </View>
          <Text style={styles.descriptionText}>
            An app to help fellow Christians and believers enrich their faith and daily life with inspirational scripture verses!
          </Text>

          {/* Navigate using Link from Expo Router */}
          <Link href="/themes" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, width: '100%', height: '100%' },
  headerContainer: { position: 'absolute', top: 60, left: 10 },
  headerText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  contentContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15 },
  welcomeContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  welcomeText: { color: '#fff', fontSize: 30, fontWeight: '800', marginRight: 10 },
  descriptionText: { color: '#fff', fontSize: 20, textAlign: 'center', marginBottom: 20, fontWeight: '400' },
  button: {
    backgroundColor: '#132235',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 },
  },
  buttonText: { color: '#fff', fontSize: 20, textAlign: 'center', fontWeight: '700' },
});
