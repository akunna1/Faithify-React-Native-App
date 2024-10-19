import React from 'react';
import { Text, View, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Use useRouter for navigation

export default function DefineScreen() {
  const router = useRouter(); // Initialize router

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={require('@/assets/images/bg.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.push('/')} style={styles.backLink}>
            <Text style={styles.headerText}>← Back</Text>
          </TouchableOpacity>
        </View>

        {/* Main Section */}
        <View style={styles.mainSection}>
          <Text style={styles.title}>Theme Definitions</Text>

          {/* White Box Container for Definitions */}
          <View style={styles.whiteBoxContainer}>
            <Text style={styles.whiteBoxContainerText}>
              ◦ Faith: <Text style={styles.definitionText}>trusting in God’s promises and believing in what cannot be seen</Text>
            </Text>
            <Text style={styles.whiteBoxContainerText}>
              ◦ Grace: <Text style={styles.definitionText}>God's unmerited favor and mercy, offering forgiveness despite any shortcomings</Text>
            </Text>
            <Text style={styles.whiteBoxContainerText}>
              ◦ Hope: <Text style={styles.definitionText}>the confident expectation of good things to come through God's plan</Text>
            </Text>
            <Text style={styles.whiteBoxContainerText}>
              ◦ Love: <Text style={styles.definitionText}>a profound affection and selfless care for others that mirrors God's nature</Text>
            </Text>
            <Text style={styles.whiteBoxContainerText}>
              ◦ Resilience: <Text style={styles.definitionText}>the ability to endure hardship and recover with strength and perseverance</Text>
            </Text>
          </View>

          {/* Continue Button to navigate to themes.tsx */}
          <TouchableOpacity style={styles.button2} onPress={() => router.push('/themes')}>
            <Text style={styles.buttonText2}>Continue</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 25,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center', // Center-align the text
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
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  whiteBoxContainer: {
    backgroundColor: '#fff', // White background
    opacity: 0.6, // mid opacity
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 30,
    width: '80%',
    alignItems: 'flex-start', // Align items to the start
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 },
  },
  whiteBoxContainerText: {
    color: '#4f4f4f', // Dark gray text
    fontSize: 19,
    fontWeight: '800', // Extra bold for the main text
    textAlign: 'left', // left-align text
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10, // Add padding to the left for consistent indentation
  },
  definitionText: {
    fontWeight: '400', // Regular weight for the definitions
  },
  button2: {
    backgroundColor: '#132235', // navy blue
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
  buttonText2: {
    color: '#fff', // white
    fontSize: 18,
    fontWeight: '800', // Extra bold
    textAlign: 'center', // Center-align text
  },
});
