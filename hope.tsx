import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Use useRouter for navigation

// Defining the structure of a verse
type Verse = {
  number: number;
  location: string;
  theme: string;
  verse: string;
};

// Importing the JSON file
const bibleVerses: Verse[] = require('@/assets/data/bible_verses.json');

export default function HopeScreen() {
  const router = useRouter(); // Initialize router
  const [currentVerse, setCurrentVerse] = useState<Verse | null>(null); // State to hold the current verse
  const [hopeVerses, setHopeVerses] = useState<Verse[]>([]); // State to hold all verses with the "Hope" theme

  useEffect(() => {
    // Filter verses with the theme "Hope"
    const filteredVerses = bibleVerses.filter((verse: Verse) => verse.theme === "Hope");
    setHopeVerses(filteredVerses);

    // Set the initial verse
    if (filteredVerses.length > 0) {
      setCurrentVerse(filteredVerses[0]);
    }
  }, []);

  // Function to shuffle to a random verse
  const shuffleVerse = () => {
    if (hopeVerses.length > 0) {
      const randomIndex = Math.floor(Math.random() * hopeVerses.length);
      setCurrentVerse(hopeVerses[randomIndex]);
    }
  };

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
        <View style={styles.mainSection} pointerEvents="box-none">
          {currentVerse && (
            <>
              <Text style={styles.themetitle}>Theme: Hope</Text>
              <Text style={styles.location}>{currentVerse.location}</Text>
              <Text style={styles.verse}>{currentVerse.verse}</Text>
            </>
          )}

          {/* Save Verses Button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save Verse</Text>
          </TouchableOpacity>

          {/* Shuffle Button */}
          <TouchableOpacity style={styles.button} onPress={shuffleVerse}>
            <Text style={styles.buttonText}>Shuffle Verses</Text>
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
  mainSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themetitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 20,
  },
  location: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  verse: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: '#132235', // Navy blue
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 35,
    marginBottom: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 },
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
});
