import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { FooterContainer, FooterButton, FooterText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';

type NavigationProp = StackNavigationProp<RootStackParamList>;


type FooterProps = {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
};



const Footer: React.FC<FooterProps> = ({ activeTab, setActiveTab }) => {

  const navigation = useNavigation<NavigationProp>();
  return (
    <FooterContainer>
      <FooterButton onPress={() => {navigation.navigate('Home'); setActiveTab?.('Home')}}>
        <MaterialIcons name="home-filled" size={24} color={activeTab === 'Home' ? "#60E886" : "white"} />
        <FooterText active={activeTab === 'Home'}>Home</FooterText>
      </FooterButton>
      <FooterButton onPress={() => setActiveTab?.('ticket')}>
        <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color={activeTab === 'ticket' ? "#60E886" : "white"} />
        <FooterText active={activeTab === 'ticket'}>Ingressos</FooterText>
      </FooterButton>
      <FooterButton onPress={() => setActiveTab?.('myAccount')}>
        <FontAwesome5 name="user" size={24} color={activeTab === 'myAccount' ? "#60E886" : "white"} />
        <FooterText active={activeTab === 'myAccount'}>Minha conta</FooterText>
      </FooterButton>
    </FooterContainer>
  );
};

export default Footer;
