import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 160px;
  width: 100%;
  padding: 10px 20px;

  background-color: #312e38;
  justify-content: space-around;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
