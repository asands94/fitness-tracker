import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='exercise'
        options={{
          title: 'Exercise',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'barbell-sharp' : 'barbell-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='food'
        options={{
          title: 'Food',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'fast-food-sharp' : 'fast-food-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  )
}
