import { Text, View, StyleSheet } from 'react-native'
import WorkoutForm from '@/components/WorkoutForm'

export default function Exercise() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Exercise Screen</Text>
      <View>
        <WorkoutForm />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
})
