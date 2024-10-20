import styled from "styled-components/native";

export const FooterContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  background-color: #2D2D2D;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  height: 88px;
  align-items: center;
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