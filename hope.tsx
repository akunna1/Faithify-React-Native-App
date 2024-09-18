import React from 'react';
import { Text, View, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Use useRouter for navigation

export default function HopeScreen() {
  const router = useRouter(); // Initialize router

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={require('@/assets/images/bg.png')} 
        style={styles.background}
        resizeMode="cover"  // Ensuring the image covers the entire screen
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.push('/themes')} style={styles.backLink}>
            <Text style={styles.headerText}>← Back</Text>
          </TouchableOpacity>
        </View>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container fills the whole screen
  },
  background: {
    flex: 1, // Ensures the background image fills the entire container
    justifyContent: 'center', // Center content if needed
    alignItems: 'center',
  },
  text: {
    color: '#fff', // Example text color for visibility
    fontSize: 20, // Example font size
  },
  headerContainer: {
    position: 'absolute',
    top: 60,
    left: 10,
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  backLink: {
    // Remove default link styles if any
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});
