
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type TaskCardProps = {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

export default function TaskCard({
  title,
  completed,
  onToggle,
  onDelete,
}: TaskCardProps) {
  return (
    <View style={styles.card}>
      <Pressable onPress={onToggle} style={styles.task}>
        <Text style={styles.check}>
          {completed ? '✅' : '⭕'}
        </Text>

        <Text
          style={[
            styles.title,
            completed && styles.completed,
          ]}
        >
          {title}
        </Text>
      </Pressable>

      <Pressable onPress={onDelete}>
        <Text style={styles.delete}>Delete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  task: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    color: '#111827',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
  delete: {
    color: '#DC2626',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
