import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>

      <Pressable
        onPress={() => router.push('/task/[id]' as any)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Open Task Details
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});