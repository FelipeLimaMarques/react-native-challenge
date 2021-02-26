import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

// Styled Components
import {
  Container,
  Text,
  LoginContainer,
  Button,
  Input,
  LogoContainer,
  Logo,
  Arrow,
} from './styles'

export default function Login({ navigation }) {
  const [user, setUser] = useState('')

  useEffect(() => {
    let mounted = true;
    return () => mounted = false;
  }, [])

  return (
    <Container>
      <StatusBar style="light" />
      <LogoContainer>
        <Logo source={require('../../../assets/github.png')} />
      </LogoContainer>
      <LoginContainer>
        <Input
          placeholder="Usuário"
          value={user}
          onChangeText={(text) => setUser(text)}
        />
        <Button onPress={() => {
          console.log(user)
          navigation.navigate('TabNav', {
            screen: 'Home',
            params: { username: user }
          })
        }}>
          <Text>ENTRAR</Text>
          <Arrow source={require('../../../assets/right-arrow-black.png')} />
        </Button>
      </LoginContainer>
    </Container>
  )
}
