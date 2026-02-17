import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Ionicons  } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

        <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#555" />
        <TextInput
            placeholder="Email"
            style={styles.textInput}
        />
        </View>

        <TextInput placeholder="Password" secureTextEntry style={styles.input}/>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>


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

  button: {
  backgroundColor: '#2563EB',
  padding: 15,
  borderRadius: 8,
  alignItems: 'center'
  },
  buttonText: {
  color: '#fff',
  fontWeight: 'bold'
  },
  
  inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  paddingHorizontal: 10,
  marginTop: 20
},
textInput: {
  flex: 1,
  padding: 10,
  marginLeft: 8
},

});


