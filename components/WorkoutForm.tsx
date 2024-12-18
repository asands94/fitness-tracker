import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native'

type WorkoutSet = {
  id: number
  setNumber: number
  name: string
  weight: string
  reps: string
}

export default function WorkoutForm() {
  const [sets, setSets] = useState<WorkoutSet[]>([
    { id: 1, setNumber: 1, name: '', weight: '', reps: '' },
  ])

  const handleAddSet = () => {
    setSets((prevSets) => [
      ...prevSets,
      {
        id: prevSets.length + 1,
        setNumber: prevSets.length + 1,
        name: '',
        weight: '',
        reps: '',
      },
    ])
  }

  const handleInputChange = (
    id: number,
    field: 'name' | 'weight' | 'reps',
    value: string
  ) => {
    setSets((prevSets) =>
      prevSets.map((set) => (set.id === id ? { ...set, [field]: value } : set))
    )
  }

  const handleFinish = () => {
    const incompleteSet = sets.find(
      (set) => !set.name || !set.weight || !set.reps
    )
    if (incompleteSet) {
      Alert.alert(
        'Error',
        `Set ${incompleteSet.setNumber} is incomplete. Please fill in all fields.`
      )
      return
    }

    console.log('Workout completed:', sets)
    Alert.alert('Success', 'Workout saved successfully!')
  }
  const date = new Date()
  const formattedDate = date.toLocaleDateString(undefined, {
    // weekday: 'long',
    // year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>{formattedDate} Workout</Text>
      {sets.map((set) => (
        <View key={set.id} style={styles.setContainer}>
          <Text style={styles.setTitle}>Set {set.setNumber}</Text>
          <TextInput
            style={styles.input}
            placeholder='Exercise Name'
            value={set.name}
            onChangeText={(value) => handleInputChange(set.id, 'name', value)}
          />
          <TextInput
            style={styles.input}
            placeholder='Weight (lbs)'
            keyboardType='numeric'
            value={set.weight}
            onChangeText={(value) => handleInputChange(set.id, 'weight', value)}
          />
          <TextInput
            style={styles.input}
            placeholder='Reps'
            keyboardType='numeric'
            value={set.reps}
            onChangeText={(value) => handleInputChange(set.id, 'reps', value)}
          />
        </View>
      ))}
      <Button title='Add Set' onPress={handleAddSet} />
      <View style={styles.finishButton}>
        <Button title='Finish' color='#28a745' onPress={handleFinish} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  setTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  finishButton: {
    marginTop: 20,
  },
})
