import React from 'react';
import { ScrollView, TouchableOpacity  } from 'react-native';
import { Container, Header, Title, TicketContainer, TicketInfo, TicketDate, TicketTitle,
  TicketLocation, TicketPrice, SellButton, SellButtonText, Footer, FooterButton, FooterIcon,
  FooterText, TicketBackground, Location, Logo, TitleHeader
 } from './styles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type Ticket = {
  date: string;
  title: string;
  location: string;
  price: string;
};

// Tipagem das rotas
type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  Details: { ticket: Ticket };
};

// Tipar a navegação
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [activeTab, setActiveTab] = React.useState('Home');

  type Ticket = {
    date: string;
    title: string;
    location: string;
    price: string;
  };

  const tickets: Ticket[] = [
    {
      date: '21 de junho',
      title: 'Show da Pitty',
      location: 'Allianz Parque - São Paulo, SP',
      price: 'R$250,00',
    },
    {
      date: '21 de junho',
      title: 'Show da Pitty Pitty Pitty  Pit...',
      location: 'Allianz Paque Allianz Parque - São Paulo, SP São Paulo, SP  São Paulo, ...',
      price: 'R$250,00',
    },
    {
      date: '21 de junho',
      title: 'Show da Pitty',
      location: 'Allianz Parque - São Paulo, SP',
      price: 'R$250,00',
    },
    {
      date: '21 de junho',
      title: 'Show da Pitty',
      location: 'Allianz Parque - São Paulo, SP',
      price: 'R$250,00',
    },
    {
      date: '21 de junho',
      title: 'Show da Pitty',
      location: 'Allianz Parque - São Paulo, SP',
      price: 'R$250,00',
    },
    
  ]

  const handleTicketPress = (ticket: Ticket) => {
    navigation.navigate('Details', { ticket });
  };


  return (
    <Container>
      <Header>
        <Logo source={require('../../../assets/logo.png')} />
        <TitleHeader>Reingresso</TitleHeader>
      </Header>

      <Title>Ingressos disponíveis</Title>

      <ScrollView>
        {tickets.map((ticket, index) =>(
        <TouchableOpacity key={index} onPress={() => handleTicketPress(ticket)}>
          <TicketContainer>
            <TicketBackground>
              <TicketInfo>
                <TicketDate>{ticket.date}</TicketDate>
                <TicketTitle>{ticket.title}</TicketTitle>
                <Location>
                  <FontAwesome6 name="location-dot" size={12} color="#999" />
                  <TicketLocation>{ticket.location}</TicketLocation>
                </Location>
                <TicketPrice>{ticket.price}</TicketPrice>
              </TicketInfo>
            </TicketBackground>
          </TicketContainer>
        </TouchableOpacity>
        ))}
      </ScrollView>

      <SellButton>
        <SellButtonText>Vender ingresso</SellButtonText>
      </SellButton>

      <Footer>
        <FooterButton onPress={() => setActiveTab('Home')}>
          <MaterialIcons name="home-filled" size={24} color={activeTab === 'Home' ? "#60E886" : "white"}  />
          <FooterText active={activeTab === 'Home'}>Home</FooterText>
        </FooterButton>
        <FooterButton onPress={() => setActiveTab('ticket')}>
          <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color={activeTab === 'ticket' ? "#60E886" : "white"} />
          <FooterText active={activeTab === 'ticket'}>Ingressos</FooterText>
        </FooterButton>
        <FooterButton onPress={() => setActiveTab('myAccount')}>
          <FontAwesome5 name="user" size={24} color={activeTab === 'myAccount' ? "#60E886" : "white"} />
          <FooterText active={activeTab === 'myAccount'}>Minha conta</FooterText>
        </FooterButton>
      </Footer>
    </Container>
  );
};

export default HomeScreen;

