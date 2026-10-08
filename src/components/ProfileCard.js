import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const ProfileCard = ({ name, bio, avatarUrl }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Image
        source={{ uri: avatarUrl || 'https://via.placeholder.com/150' }}
        style={styles.avatar}
      />
      <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
      <Text style={[styles.bio, { color: colors.textSecondary }]}>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    marginVertical: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default ProfileCard;
