import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';
import Configuracoes from '../screens/Configuracoes';

const Tab = createBottomTabNavigator();

export default function Tabs({ route }) {
  const { nome } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: nome === 'admin' ? '#4CAF50' : '#2196F3',
        },
        headerTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ nome }}
        options={{ title: `Olá, ${nome}` }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        initialParams={{ nome }}
      />

      <Tab.Screen
        name="Configurações"
        component={Configuracoes}
      />
    </Tab.Navigator>
  );
}