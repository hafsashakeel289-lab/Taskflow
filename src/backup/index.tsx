
import { useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TaskCard from '../components/TaskCard';
import AppButton from '../components/AppButton';
import TaskInput from '../components/TaskInput';

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export default function HomeScreen() {
  const [taskInput, setTaskInput] = useState('');

  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Learn React Native', completed: false },
    { id: '2', title: 'Practice Expo', completed: false },
    { id: '3', title: 'Build TaskFlow', completed: true },
  ]);

  function addTask() {
    const title = taskInput.trim();

    if (!title) {
      Alert.alert('Empty task', 'Please enter a task.');
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };

    setTasks(current => [...current, newTask]);
    setTaskInput('');
  }

  function toggleTask(id: string) {
    setTasks(current =>
      current.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id: string) {
    setTasks(current =>
      current.filter(task => task.id !== id)
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>TaskFlow</Text>

      <Text style={styles.subtitle}>
        You have {tasks.length} tasks
      </Text>

      <TaskInput
        value={taskInput}
        onChangeText={setTaskInput}
      />

      <AppButton
        label="Add Task"
        onPress={addTask}
      />

      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCard
            title={item.title}
            completed={item.completed}
            onToggle={() => toggleTask(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No tasks yet! Add your first task.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#F3F4F6',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    color: '#6B7280',
    marginTop: 8,
    marginBottom: 20,
  },
  list: {
    marginTop: 20,
  },
  empty: {
    textAlign: 'center',
    color: '#6B7280',
    marginTop: 30,
  },
});
