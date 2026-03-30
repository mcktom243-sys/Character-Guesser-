import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Level Grid</Text>
      {/* Placeholder for level grid */}
      <View style={styles.gridContainer}>
        {/* Generate level grid here */}
        <Text>Level Grid Placeholder</Text>
      </View>
      <Text style={styles.title}>Player Stats</Text>
      {/* Player stats would be dynamically generated from state */}
      <View style={styles.statsContainer}>
        <Text>Player: Player Name</Text>
        <Text>Score: 100</Text>
        <Text>Lives: 3</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Start Game" onPress={() => {/* Navigation to start game */}} />
        <Button title="Settings" onPress={() => {/* Navigation to settings */}} />
        <Button title="About" onPress={() => {/* Navigation to about */}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  gridContainer: {
    marginBottom: 20,
    // Add more styling for grid if needed
  },
  statsContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default HomeScreen;