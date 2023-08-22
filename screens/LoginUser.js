import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

export default function LoginUser() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!username || !password) {
      alert('Usuário ou senha não informados.');
      return;
    }

    try {
      const response = await fetch('https://grupofmv.app.br/api/v1/integracao/loginApp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const responseData = await response.json();

      if (responseData.status === 1) {
        console.log('teste2',responseData.user)
        setUser(responseData.user);
        navigation.navigate('Home');
      } else if (responseData.status === 2) {
        alert('Usuário ou senha incorretos.');
      } else if (responseData.status === 3) {
        alert('Erro desconhecido, erro 3.');
      }
    } catch (error) {
      console.error('Erro ao efetuar login:', error);
      alert('Erro ao efetuar login. Verifique sua conexão e tente novamente.');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#4E54C8" }}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Acessar</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4E54C8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
    color: '#fff',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    fontFamily: 'Arial',
    backgroundColor: 'white'
  },
  loginButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButtonText: {
    color: '#4E54C8',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});