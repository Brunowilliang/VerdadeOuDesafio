import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Text, Button, Icon } from './styles';

interface Props extends RectButtonProps {
  name: string;
  // onPress: () => void;
}

export function AddUser({name, ...rest}: Props){
  return (
    <Container>
      <Text>{name}</Text>
      <Button {...rest} >
        <Icon name="user-times"/>
      </Button>
    </Container>
  );
}