
import { Pressable, StyleSheet, Text } from 'react-native';

type AppButtonProps = {
  label: string;
  onPress: () => void;
};

export default function AppButton({
  label,
  onPress,
}: AppButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
