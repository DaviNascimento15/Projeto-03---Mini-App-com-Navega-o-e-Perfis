import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Perfil({ navigation, route }) {
  const { nome } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        style={styles.img}
      />

      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>Email: aluno@email.com</Text>
      <Text style={styles.text}>Nascimento: 01/01/2000</Text>

      <Button
        title="Logout"
        onPress={() => navigation.replace('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});