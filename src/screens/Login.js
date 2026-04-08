import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    if (usuario === 'Davi' && senha === '123') {
      navigation.replace('Tabs', { nome: usuario });
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Usuário"
        style={styles.input}
        onChangeText={setUsuario}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        onChangeText={setSenha}
      />

      <Button title="Entrar" onPress={entrar} />
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
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});