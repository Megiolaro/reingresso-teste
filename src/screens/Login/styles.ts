import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #1c1c1c; 
  padding: 20px;
`;

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 60px;
    justify-content: center;
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

export const SignUpContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SignUpText = styled.Text`
  color: #fff;
`;

export const SignUpLink = styled.Text`
  color: #60E886;
  font-weight: bold;
`;