import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  height: 50px;
  border-radius: 6px;
  background-color: #ff9000;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #312e38;
  font-weight: bold;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
`;
