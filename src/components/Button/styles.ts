import styled from 'styled-components/native';

export const ButtonContainer = styled.View<{ variant: 'primary' | 'secondary' }>`
  background-color: ${({ variant }) => (variant === 'primary' ? '#60E886' : '')};
  width: 100%;
  padding: 15px;
  border-radius: 40px;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;  /* Isso alinha o texto verticalmente ao centro */
  margin-bottom: 10px;
  

  ${({ variant }) => variant === 'secondary' && `
    border-width: 1px;
    border-color: #fff;
  `}
`;

export const ButtonText = styled.Text<{ variant: 'primary' | 'secondary' }>`
  color: ${({ variant }) => (variant === 'primary' ? '#000' : '#fff')};
  font-size: 16px;
  font-weight: 600;
`;