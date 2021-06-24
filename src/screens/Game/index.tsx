import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, ContentButton, WrapperButton } from './styles';
import { Button } from '../../components/Button';

export function Game(){
  const navigation = useNavigation();


  function HandleClick(){
    navigation.navigate('Settings');
  }

  return (
    <Container>
      <Title>Bruno</Title>
      <Title>
        escolha as
        opções abaixo
      </Title>
      <ContentButton>
        <WrapperButton>
          <Button title="Verdade" onPress={HandleClick}/>
        </WrapperButton>
        <WrapperButton>
          <Button title="Desafio" onPress={HandleClick}/>
        </WrapperButton>
      </ContentButton>
    </Container>
  );
}