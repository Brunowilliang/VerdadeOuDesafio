import React from 'react';
import { Container, Text, Button, Icon } from './styles';

export interface DataUserProps {
  name: string;
  onPress: () => void;
}

export function AddUser({name, onPress}: DataUserProps){
  return (
    <Container>
      <Text>{name}</Text>
      <Button onPress={onPress}>
        <Icon name="user-times"/>
      </Button>
    </Container>
  );
}