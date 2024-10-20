import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Container, SplashImage} from './styles'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
   
    const timer = setTimeout(() => {
      navigation.navigate('Login'); 
    }, 3000);

    
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container>
      <SplashImage source={require('../../../assets/logo.png')} resizeMode="contain" />
    </Container>
  );
};


export default SplashScreen;
