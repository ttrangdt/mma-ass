import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ThemeContext } from '../context/ThemeContext';
import { ProfileContext } from '../context/ProfileContext';

const EditProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .max(50, 'Name is too long!')
    .required('Name is required'),
  bio: Yup.string()
    .min(10, 'Bio should be at least 10 characters long')
    .max(150, 'Bio is too long!')
    .required('Bio is required'),
});

const EditProfileScreen = ({ navigation }) => {
  const { colors } = useContext(ThemeContext);
  const { profile, updateProfile } = useContext(ProfileContext);

  const handleSave = (values) => {
    updateProfile(values);
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Formik
        initialValues={{ name: profile.name, bio: profile.bio }}
        validationSchema={EditProfileSchema}
        onSubmit={handleSave}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <Text style={[styles.label, { color: colors.text }]}>Name</Text>
            <TextInput
              style={[
                styles.input,
                { 
                  backgroundColor: colors.card, 
                  color: colors.text, 
                  borderColor: (touched.name && errors.name) ? colors.error : colors.border 
                }
              ]}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Enter your name"
              placeholderTextColor={colors.textSecondary}
            />
            {touched.name && errors.name && (
              <Text style={[styles.errorText, { color: colors.error }]}>{errors.name}</Text>
            )}

            <Text style={[styles.label, { color: colors.text }]}>Bio</Text>
            <TextInput
              style={[
                styles.input,
                styles.textArea,
                { 
                  backgroundColor: colors.card, 
                  color: colors.text, 
                  borderColor: (touched.bio && errors.bio) ? colors.error : colors.border 
                }
              ]}
              onChangeText={handleChange('bio')}
              onBlur={handleBlur('bio')}
              value={values.bio}
              placeholder="Write a short bio"
              placeholderTextColor={colors.textSecondary}
              multiline
              numberOfLines={4}
            />
            {touched.bio && errors.bio && (
              <Text style={[styles.errorText, { color: colors.error }]}>{errors.bio}</Text>
            )}

            <TouchableOpacity
              style={[styles.saveButton, { backgroundColor: colors.primary }]}
              onPress={handleSubmit}
            >
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    fontSize: 12,
    marginTop: 4,
  },
  saveButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 32,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default EditProfileScreen;
