import React from 'react';
import { ScrollView,} from 'react-native';
import {
  Container, Header, BackButton, BackText, Title, TicketInfo, TicketPrice, TicketTitle, TicketDate,
  TicketLocation, TicketDetailsSection, DetailTitle, DetailItem, Label, Value, Footer, FooterButton, FooterText,
  BuyButton, BuyButtonText, TicketBackground, Location, DetailContainer, LabelWithIcon
} from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined; // Rota "Home" sem parâmetros
  Details: { ticket: Ticket }; // A rota "Details" recebe um ticket
};

const Stack = createStackNavigator<RootStackParamList>();



type Ticket = {
  date: string;
  title: string;
  location: string;
  price: string;
};

type RouteParams = {
  Details: { ticket: Ticket };
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

const DetailsScreen = () => {

  const navigation = useNavigation<NavigationProp>();

  const route = useRoute<RouteProp<RouteParams, 'Details'>>();
  const { ticket } = route.params;

  return (
    <Container>
      <ScrollView>
        <Header>
          <BackButton onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
            <BackText></BackText>
          </BackButton>

        </Header>
        <Title>Detalhes do Ingresso</Title>

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


        <TicketDetailsSection>
          <DetailTitle>{ticket.title}</DetailTitle>

          <Label>Endereço</Label>
          <Value>{ticket.location}</Value>

          <DetailContainer>
            <DetailItem>
              <Label>Data do evento</Label>
              <Value>{ticket.date}</Value>
            </DetailItem>

            <DetailItem>
              <Label>Horário do evento</Label>
              <Value>18:00</Value>
            </DetailItem>
          </DetailContainer>

          <DetailContainer>
            <DetailItem>
              <Label>Tipo de Ingresso</Label>
              <Value>Inteira</Value>
            </DetailItem>

            <DetailItem>
              <Label>Classificação</Label>
              <Value>Livre</Value>
            </DetailItem>
          </DetailContainer>

          <DetailContainer>
            <Label>Valor do ingresso</Label>
            <Value>{ticket.price}</Value>
          </DetailContainer>

          <DetailContainer>
            <Label>Taxa 1</Label>
            <Value>R$2,00</Value>
          </DetailContainer>

          <DetailContainer>
            <Label>Taxa 2</Label>
            <Value>R$2,00</Value>
          </DetailContainer>

          <DetailContainer>
            <Label>Taxa 3</Label>
            <Value>R$2,00</Value>
          </DetailContainer>

          <DetailContainer>
            <LabelWithIcon>
              <Label>Ingresso + Taxas</Label>
              <MaterialCommunityIcons name="information" size={18} color='#60E886'/>
            </LabelWithIcon>
            <Value>R$256,00</Value>
          </DetailContainer>

          <DetailItem>
            <Label>Observações</Label>
            <Value>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Value>
          </DetailItem>
        </TicketDetailsSection>
      </ScrollView>

      <BuyButton>
        <BuyButtonText>Comprar</BuyButtonText>
      </BuyButton>

      <Footer>
        <FooterButton onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="home-filled" size={32} color="white" />
          <FooterText>Home</FooterText>
        </FooterButton>
        <FooterButton>
          <MaterialCommunityIcons name="ticket-confirmation-outline" size={32} color="white" />
          <FooterText>Ingressos</FooterText>
        </FooterButton>
        <FooterButton>
          <FontAwesome5 name="user" size={32} color="white" />
          <FooterText>Minha conta</FooterText>
        </FooterButton>
      </Footer>
    </Container>
  );
};

export default DetailsScreen;


