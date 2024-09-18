import React from 'react';
import { Text, View, ImageBackground, StyleSheet, StatusBar } from 'react-native';

export default function FaithScreen() {
  return (
    <View style={styles.container}>
     <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      
      <ImageBackground
        source={require('@/assets/images/bg.png')} 
        style={styles.background}
        resizeMode="cover"  // Ensuring the image covers the entire screen
      >
        {/* You can add other components here if needed */}
        <Text style={styles.text}>Your content here</Text>
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
});
