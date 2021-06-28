import React, { useState, useEffect, useContext } from 'react';
import { StatusBar, Modal } from 'react-native';
import { useTheme } from 'styled-components';

import { ModalGame } from '../ModalGame';

import { Button } from '../../components/Button';
import { AddUser } from '../../components/AddUser';
import uuid, {  } from 'react-native-uuid';
import { Container, Content, Input, ListUser, Footer } from './styles';
export interface UserProps {
  id: string | number[];
  name: string;
}

export function Settings(){
  const theme = useTheme();


  const [name, setName] = useState('');
  const [users, setUsers] = useState<UserProps[]>([]);
  const [modal, setModal] = useState(false);

  function HandleAddUser(){
    const data = {
      id: uuid.v4(),
      name: name,
    }
    setUsers([...users, data]);
  }

  function handleRemoveUser(id: string){
    setUsers([...users.filter( name => name.id !== id )])
  }
  
  function HandleGameModal(){
    setModal(true);
  }

  function HandleCloseGameModal(){
    setModal(false);
  }

  
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Content>
        <Input
          placeholder="Nome do participante"
          placeholderTextColor={theme.colors.primary}
          onChangeText={setName}
        />
        <Button title="adicionar Participante" onPress={HandleAddUser}/>

        <ListUser 
          data={users}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <AddUser
              name={item.name}
              onPress={() => handleRemoveUser(item.id)}
            />
          )}
        />

      </Content>
      
      <Footer>
        <Button title="Começar Jogo" onPress={HandleGameModal}/>
      </Footer>

      <Modal visible= {modal} animationType="fade" >
        <ModalGame closeModal={HandleCloseGameModal}/>
      </Modal>
    </Container>
  );
}