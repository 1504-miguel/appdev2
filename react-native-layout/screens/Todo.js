import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TodoScreen() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [searchText, setSearchText] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([
      ...todos,
      { id: Date.now().toString(), text: newTodo, completed: false },
    ]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    Alert.alert('Delete Todo', 'Are you sure you want to delete this todo?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => setTodos(todos.filter((todo) => todo.id !== id)),
      },
    ]);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.header}>My Todos</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Search todos..."
            placeholderTextColor="#aaa"
            value={searchText}
            onChangeText={setSearchText}
          />

          <FlatList
            data={filteredTodos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.todoItem,
                  item.completed && { backgroundColor: '#e0f7fa' },
                ]}
              >
                <TouchableOpacity onPress={() => toggleTodo(item.id)}>
                  <Ionicons
                    name={item.completed ? 'checkbox' : 'square-outline'}
                    size={26}
                    color={item.completed ? '#00bfa5' : '#555'}
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.todoText,
                    {
                      textDecorationLine: item.completed ? 'line-through' : 'none',
                      color: item.completed ? '#888' : '#333',
                    },
                  ]}
                >
                  {item.text}
                </Text>
                <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                  <Ionicons name="trash-outline" size={24} color="#ff5252" />
                </TouchableOpacity>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 100 }}
          />

          <View style={styles.addContainer}>
            <TextInput
              style={styles.addInput}
              placeholder="Add a new task..."
              placeholderTextColor="#aaa"
              value={newTodo}
              onChangeText={setNewTodo}
            />
            <TouchableOpacity style={styles.addButton} onPress={addTodo}>
              <Ionicons name="add" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fc',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e1f28',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 16,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  todoText: {
    flex: 1,
    fontSize: 17,
    marginLeft: 14,
  },
  addContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 16,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  addButton: {
    marginLeft: 12,
    backgroundColor: '#1e1f28',
    padding: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});