import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #312e38;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #999;
  margin: 30px 0;
`;

export const Description = styled.Text`
  color: #999;
  padding-top: 15px;
  padding-bottom: 35px;
  font-size: 16px;
  text-align: center;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerTextIcon = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const TextItem = styled.Text`
  font-size: 16px;
  color: #999;
`;
