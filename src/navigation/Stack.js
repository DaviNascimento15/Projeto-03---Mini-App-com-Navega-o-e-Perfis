import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Tabs" 
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}