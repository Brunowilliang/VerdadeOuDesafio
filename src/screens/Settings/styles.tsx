import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';

import { UserProps } from '.'


export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;


export const Content = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 60px;
  padding: 0px 18px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
`;


export const ListUser = styled(FlatList as new () => FlatList<UserProps>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
  }
})``;

export const Footer = styled.View`
  margin-top: 10px;
`;