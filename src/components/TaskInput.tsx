
import { StyleSheet, TextInput, View } from 'react-native';

type TaskInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function TaskInput({
  value,
  onChangeText,
}: TaskInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
  },
});
