import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
 
import { Button } from '../../components/Button';
import { AddUser } from '../../components/AddUser';
import { Container, Content, Input, ListUser, Footer } from './styles';

interface UserProps {
  id: string;
  name: string;
}

export function Settings(){
  const theme = useTheme();
  const navigation = useNavigation();

  const [name, setName] = useState<string>('');
  const [users, setUsers] = useState<UserProps[]>([]);

  function HandleAddUser(){
    const data = {
      id: String(),
      name: name,
    }
    setUsers([...users, data]);
  }

  function handleRemoveUser(id: string){
    setUsers([...users.filter( name => name.id !== id )])
  }
  
  function HandleGame(){
    navigation.navigate('Game');
  }

  // useEffect(() = {}, [])
  
  return (
    <Container>
      <Content>
        <Input
          placeholder="Nome do participante"
          placeholderTextColor={theme.colors.text}
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
        <Button title="Começar Jogo" onPress={HandleGame}/>
      </Footer>
    </Container>
  );
}