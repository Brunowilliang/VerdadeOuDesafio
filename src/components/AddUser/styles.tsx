import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.primary_light};
  border-radius: 5px;
`;


export const Text = styled.Text`
  padding: 0px 15px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Button = styled(RectButton)`
width: 17%;
height: 60px;
background-color: ${({ theme }) => theme.colors.primary};
border-radius: 5px;
justify-content: center;
align-items: center;
`;

export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
