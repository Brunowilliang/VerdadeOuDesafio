import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
 
import { Button } from '../../components/Button';
import { DataUserProps, AddUser } from '../../components/AddUser';
import { Container, Content, Input, ListUser, Footer } from './styles';

// export interface UserProps extends DataUserProps {
//   id: string;
// }

export function Settings(){
  const navigation = useNavigation();
  const [value, setValue] = useState<string>('');
  const [users, setUsers] = useState<string[]>([]);
  const theme = useTheme();

  
  function HandleClick(){
    setUsers([...users, value]);
  }
  
  function HandleGame(){
    navigation.navigate('Game');
  }

  
  return (
    <Container>
      <Content>
        <Input
          placeholder="Nome do participante"
          placeholderTextColor={theme.colors.text}
          value={value}
          onChangeText={text => {setValue(text)}}
        />
        <Button title="adicionar Participante" onPress={HandleClick}/>

        <ListUser
          data={users}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <AddUser
              id={item.id}
              name={value}
              onPress={() => {}}
            />
          }
        />
      </Content>
      
      <Footer>
        <Button title="Começar Jogo" onPress={HandleGame}/>
      </Footer>
    </Container>
  );
}