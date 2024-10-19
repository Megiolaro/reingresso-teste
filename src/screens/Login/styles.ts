import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c; 
  padding: 20px;
`;

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 60px;
`

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 31.61px;
    font-weight: 600;
`

export const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #fff;
  font-size: 16px;
`;

export const ForgotPasswordText = styled.Text`
  color: #60E886;
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: #60E886; 
  border-radius: 40px;
  align-items: center;
  margin-bottom: 10px;
`;

export const LoginButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 600;

`;

export const GuestButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  border-width: 1px;
  border-color: #fff;
  border-radius: 40px;
  align-items: center;
  margin-bottom: 20px;
`;

export const GuestButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const SignUpContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SignUpText = styled.Text`
  color: #fff;
`;

export const SignUpLink = styled.Text`
  color: #60E886;
  font-weight: bold;
`;