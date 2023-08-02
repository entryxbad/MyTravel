import CardItem from '../components/CardItem'
import HomeScreen from '../screens/HomeScreen'
import StartScreen from '../screens/StartScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Card" component={CardItem} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
