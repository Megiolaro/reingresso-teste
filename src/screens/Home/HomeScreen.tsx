import React from 'react';
import { ScrollView, TouchableOpacity  } from 'react-native';
import { Container, Header, Title, TicketContainer, TicketInfo, TicketDate, TicketTitle,
  TicketLocation, TicketPrice, TicketBackground, Location, Logo, TitleHeader, ButtonContainer
 } from './styles'
import Button from '../../components/Button/Button'; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Footer from '../../components/Footer/Footer';
import { RootStackParamList, Ticket } from '../../types/navigation';


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [activeTab, setActiveTab] = React.useState('Home');

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
      
      <ButtonContainer>
        <Button title="Vender ingresso"  variant="primary" />
      </ButtonContainer>
      
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </Container>
  );
};

export default HomeScreen;

