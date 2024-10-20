import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Container, SplashImage} from './styles'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    // Timer para 3 segundos
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Navega para a tela Home após 3 segundos
    }, 3000);

    // Limpar o timer quando o componente desmontar
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container>
      {/* Imagem da splash */}
      <SplashImage source={require('../../../assets/logo.png')} resizeMode="contain" />
    </Container>
  );
};


export default SplashScreen;
