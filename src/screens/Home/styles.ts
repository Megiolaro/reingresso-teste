import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1c1c1c;
`;

export const Header = styled.View`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 64px;
  margin-bottom: 40px;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 80px;
`;

export const TitleHeader = styled.Text`
    font-size: 26px;
    font-weight: 600;
    color: #fff;

`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin-left: 50px;
  margin-bottom: 26px;
`;

export const TicketContainer = styled.View`
  padding: 0px;
`;

export const TicketBackground = styled.ImageBackground`
  background-image: url('../../../assets/ticket.png');
  background-size: cover;
  background-position: center;
  width: 326px;
  height: 116px;
  margin: 10px auto;
  position: relative;
  overflow: visible;
`;

export const TicketInfo = styled.View`
  flex: 1;
  padding: 15px;
  position: relative;
  padding-left: 30px;
`;

export const TicketDate = styled.Text`
  color: #999;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 15px;
`;

export const TicketTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
`;

export const Location = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
`

export const TicketLocation = styled.Text`
  color: #666;
  font-size: 12px;
  font-weight: 400;
  width: 80%;
`;

export const TicketPrice = styled.Text`
  color: #0A7E68;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  right: 85px;
  top: 16px;
  background-color: #d2f8d2;
`;


export const SellButton = styled.TouchableOpacity`
  background-color: #00cc66;
  padding: 15px;
  border-radius: 40px;
  margin: 20px;
  align-items: center;
`;

export const SellButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  background-color: #2D2D2D;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  height: 88px;
`;

export const FooterButton = styled.TouchableOpacity`
  align-items: center;
`;

export const FooterIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const FooterText = styled.Text <{ active: boolean }>`
  color: ${(props) => (props.active ? '#60E886' : '#fff')};;
  font-size: 12px;
`;
