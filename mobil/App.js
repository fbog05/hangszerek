import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { InstrumentsScreen } from './components/InstrumentsScreen';
import { AboutScreen } from './components/AboutScreen';

export default function App() {

  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer theme={{ colors: { primary: "white" } }}>
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: { color: 'white' },
        tabBarStyle: { backgroundColor: '#800040' },
      }}>
        <Tab.Screen name='Hangszerek' component={InstrumentsScreen} />
        <Tab.Screen name='Névjegy' component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
