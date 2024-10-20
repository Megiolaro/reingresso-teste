import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonText } from './styles';


type ButtonVariant = 'primary' | 'secondary';


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

