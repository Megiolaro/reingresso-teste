import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1c1c1c;
`;

export const Header = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 8px;
  margin-top: 50px;
  background-color: #60E886;
  border-radius: 38px;
  margin-left: 15px;
`;

export const BackText = styled.Text`
  width: 24px;
  text-align:center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  font-weight: 500;
  padding-left: 32px; 
  margin-bottom: 24px;
`;

export const TicketBackground = styled.ImageBackground.attrs({
    source: require('../../../assets/ticket2.png'),
    resizeMode: 'cover',
  })`
  background-size: cover;
  background-position: center;
  width: 326px;
  height: 122px;
  padding: 16px;
  margin: 10px auto;
  position: relative;
  overflow: visible;
`;

export const TicketInfo = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const TicketImage = styled.View`
  width: 100px;
  height: 60px;
  background-color: #444;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const TicketPrice = styled.Text`
  color: #0A7E68;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  right: 85px;
  top: 4px;
  background-color: #d2f8d2;
`;

export const TicketTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 2px 0;
  width: 80%;
`;

export const TicketDate = styled.Text`
  color: #999;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 15px;
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
  width: 70%;
`;

export const TicketDetailsSection = styled.View`
  padding: 20px;
  padding-left: 32px;
`;

export const DetailTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const DetailContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  margin-bottom: 10px;
`;

export const DetailItem = styled.View`
  flex: 1;
  margin-right: 10px;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 18px;
`;

export const LabelWithIcon = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items:center;
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

export const FooterText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;

export const BuyButton = styled.TouchableOpacity`
  background-color: #00cc66;
  padding: 15px;
  border-radius: 40px;
  margin: 20px;
  align-items: center;
  height: 52px;
`;

export const BuyButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;