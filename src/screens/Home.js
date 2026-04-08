import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation, route }) {
  const { nome } = route.params;

  const mensagens = [
    "Você consegue!",
    "Nunca desista!",
    "Foco total!",
    "Continue firme!"
  ];

  const msg = mensagens[Math.floor(Math.random() * mensagens.length)];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {nome}</Text>
      <Text style={styles.msg}>{msg}</Text>

      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  msg: {
    fontSize: 18,
    marginBottom: 20,
  },
});