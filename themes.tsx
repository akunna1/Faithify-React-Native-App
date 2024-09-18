import React from 'react';
import { Text, View, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Use useRouter for navigation

export default function ThemesScreen() {
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
          <Text style={styles.title}>Pick a theme to see bible verses related to it</Text>

          {/* Button 1*/}
          <TouchableOpacity style={styles.button} onPress={() => router.push('/faith')}>
                <Text style={styles.buttonText}>Faith</Text>
          </TouchableOpacity>

          {/* Button 2*/}
          <TouchableOpacity style={styles.button} onPress={() => router.push('/grace')}>
            <Text style={styles.buttonText}>Grace</Text>
          </TouchableOpacity>

           {/* Button 3*/}
           <TouchableOpacity style={styles.button} onPress={() => router.push('/hope')}>
            <Text style={styles.buttonText}>Hope</Text>
          </TouchableOpacity>

          {/* Button 4*/}
          <TouchableOpacity style={styles.button} onPress={() => router.push('/love')}>
            <Text style={styles.buttonText}>Love</Text>
          </TouchableOpacity>

           {/* Button 5*/}
           <TouchableOpacity style={styles.button} onPress={() => router.push('/resilience')}>
            <Text style={styles.buttonText}>Resilience</Text>
          </TouchableOpacity>

           {/* Button 6*/}
           <TouchableOpacity style={styles.button2} onPress={() => router.push('/linker')}>
            <Text style={styles.buttonText2}>Skip</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
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
  button: {
    backgroundColor: '#fff', // White background
    opacity: 0.6, // mid opacity
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 35,
    marginBottom: 30,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 },
  },
  buttonText: {
    color: '#4f4f4f', // Dark gray text
    fontSize: 18,
    fontWeight: '800', // Extra bold
    textAlign: 'center', // Center-align text
  },
  button2: {
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
  buttonText2: {
    color: '#fff', // white
    fontSize: 18,
    fontWeight: '800', // Extra bold
    textAlign: 'center', // Center-align text
  },
});
