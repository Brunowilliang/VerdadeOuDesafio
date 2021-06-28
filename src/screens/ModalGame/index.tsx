import React from 'react';
import { Container, Title, ContentButton, WrapperButton } from './styles';
import { Button } from '../../components/Button';

interface Props {
  closeModal: () => void;
}

export function ModalGame({ closeModal }: Props){

  return (
    <Container>
      <Title>Jogador</Title>
      <Title>
        escolha as
        opções abaixo
      </Title>
      <ContentButton>
        <WrapperButton>
          <Button title="Verdade" onPress={closeModal}/>
        </WrapperButton>
        <WrapperButton>
          <Button title="Desafio" onPress={closeModal}/>
        </WrapperButton>
      </ContentButton>
    </Container>
  );
}