// Ticket.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TicketContainer, TicketBackground, TicketInfo, TicketDate, TicketTitle, Location, 
TicketLocation, TicketPrice } from './styles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type TicketProps = {
  date: string;
  title: string;
  location: string;
  price: string;
  onPress: () => void;
};

const Ticket: React.FC<TicketProps> = ({ date, title, location, price, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TicketContainer>
        <TicketBackground>
          <TicketInfo>
            <TicketDate>{date}</TicketDate>
            <TicketTitle>{title}</TicketTitle>
            <Location>
              <FontAwesome6 name="location-dot" size={12} color="#999" />
              <TicketLocation>{location}</TicketLocation>
            </Location>
            <TicketPrice>{price}</TicketPrice>
          </TicketInfo>
        </TicketBackground>
      </TicketContainer>
    </TouchableOpacity>
  );
};

export default Ticket;
