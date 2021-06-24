import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, ButtonWrapper } from './styles';
import { Button } from '../../components/Button';

export function Home(){
  const navigation = useNavigation();


  function HandleClick(){
    navigation.navigate('Settings');
  }

  return (
    <Container>
      <Title>
        Revele a verdade e apimente as coisas neste jogo viciante
      </Title>
      <ButtonWrapper>
        <Button title="Começar Jogo" onPress={HandleClick}/>
      </ButtonWrapper>
    </Container>
  );
}