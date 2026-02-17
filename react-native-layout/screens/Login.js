import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput placeholder="Email" style={styles.input}/>
      <TextInput placeholder="Password" secureTextEntry style={styles.input}/>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  input: {
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 12,
  borderRadius: 8,
  marginTop: 20,
  marginBottom: 15},
});
