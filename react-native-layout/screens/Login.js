import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>
      
      <Image 
        source={require('../assets/images/login.png')}
        style={styles.image}
      />

      <Text style={styles.title}>Login</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#555" />
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#555" />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="log-in-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});
