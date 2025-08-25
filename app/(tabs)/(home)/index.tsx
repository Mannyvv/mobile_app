import { Button } from '@react-navigation/elements';
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/details" asChild>
        <Button>Go to Details</Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
    color: '#fff',
    backgroundColor: '#ffffffff',
    gap: 50,
  },
});
