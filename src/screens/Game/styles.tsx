import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(25)}px;
  text-align: center;
`;


export const ContentButton =  styled.View`
  margin-top: 30px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;


export const WrapperButton =  styled.View`
  width: 48%;
`;

