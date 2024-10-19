import React from 'react';
import { Container,HeaderContainer,  Logo, Title, Input, ForgotPasswordText, LoginButton, 
LoginButtonText, GuestButton, GuestButtonText, SignUpContainer, SignUpText, SignUpLink } from './styles'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;


const LoginScreen = () => {

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleGuestLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <HeaderContainer>
        <Logo source={require('../../../assets/logo.png')} />
        <Title>Reingresso</Title>
      </HeaderContainer>
      

      <Input placeholder="nome@email.com" placeholderTextColor="#808080" />
      <Input placeholder="senha" secureTextEntry={true} placeholderTextColor="#808080" />

      <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>

      <LoginButton>
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>

      <GuestButton>
        <GuestButtonText onPress={handleGuestLogin}>Entrar sem login</GuestButtonText>
      </GuestButton>

      <SignUpContainer>
        <SignUpText>Não possui cadastro? </SignUpText>
        <SignUpLink>Cadastre-se aqui</SignUpLink>
      </SignUpContainer>
    </Container>
  );
};



export default LoginScreen;