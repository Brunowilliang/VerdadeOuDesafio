import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';



export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
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
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin-bottom: 10px;
`;


export const ListUser = styled(FlatList as new () => FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
  }
})``;

export const Footer = styled.View`
  margin-top: 10px;
`;