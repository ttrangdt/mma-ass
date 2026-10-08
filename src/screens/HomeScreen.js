import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const HomeScreen = ({ navigation }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Welcome to ProfileApp!</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Manage your personal profile and settings seamlessly.
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonSecondary, { borderColor: colors.primary }]}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={[styles.buttonTextSecondary, { color: colors.primary }]}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    width: '80%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonSecondary: {
    width: '80%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
  },
  buttonTextSecondary: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;
