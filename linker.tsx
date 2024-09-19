import React from 'react';
import { Text, View, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Use useRouter for navigation

export default function LinkerScreen() {
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

          {/* Main Section */}
           <View style={styles.mainSection}>
          <Text style={styles.title}>Memorization Tools</Text>

          {/* Button 1*/}
          <TouchableOpacity style={styles.button} onPress={() => router.push('/quiz')}>
                <Text style={styles.buttonText}>Quiz Yourself</Text>
          </TouchableOpacity>

          {/* Button 2*/}
          <TouchableOpacity style={styles.button} onPress={() => router.push('/saver')}>
            <Text style={styles.buttonText}>Verse Saver</Text>
          </TouchableOpacity>

           {/* Button 3*/}
           <TouchableOpacity style={styles.button} onPress={() => router.push('/tracker')}>
            <Text style={styles.buttonText}>Progress Tracker</Text>
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
  mainSection: {
    flex: 1,
    alignItems: 'center',
    marginTop: 110,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800', // Extra bold
    marginBottom: 40,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center', // Center-align the text
  },
  button: {
    backgroundColor: '#132235', //navy blue
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 35,
    marginBottom: 25,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 },
  },
  buttonText: {
    color: '#fff', // white
    fontSize: 20,
    fontWeight: '800', // Extra bold
    textAlign: 'center', // Center-align text
  },
});
