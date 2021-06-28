import React from 'react';
import { StatusBar } from 'react-native';
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
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Title>
        Revele a verdade e apimente as coisas neste jogo viciante
      </Title>
      <ButtonWrapper>
        <Button title="Adicione os participantes" onPress={HandleClick}/>
      </ButtonWrapper>
    </Container>
  );
}