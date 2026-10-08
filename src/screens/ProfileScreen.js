import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { ProfileContext } from '../context/ProfileContext';
import ProfileCard from '../components/ProfileCard';

const ProfileScreen = ({ navigation }) => {
  const { colors } = useContext(ThemeContext);
  const { profile } = useContext(ProfileContext);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ProfileCard 
        name={profile.name} 
        bio={profile.bio} 
        avatarUrl={profile.avatarUrl} 
      />

      <TouchableOpacity
        style={[styles.editButton, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  editButton: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProfileScreen;
