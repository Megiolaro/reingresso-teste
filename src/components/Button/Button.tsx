import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonText } from './styles';

// Define os tipos de variante
type ButtonVariant = 'primary' | 'secondary';

// Define as propriedades do botão
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, variant = 'primary', ...rest }) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <ButtonContainer variant={variant}>
        <ButtonText variant={variant}>{title}</ButtonText>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;

