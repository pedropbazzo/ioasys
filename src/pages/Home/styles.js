import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #3e3b47;
`;

export const SearchInput = styled.TextInput`
  height: 50px;
  border-radius: 6px;
  background-color: #3e3b47;
  padding: 15px;
`;

export const Tag = styled.TouchableOpacity`
  height: 40px;
  border-width: 1px;
  border-color: #888;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 100px;
  margin: 5px 0;
  margin-right: 10px;
`;

export const ContainerCardEnterprise = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: 0 20px;
  background-color: #3e3b47;
  margin-top: 10px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 6px;
  margin-right: 8px;
`;

export const EnterpriseName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #888;
`;

export const EnterpriseType = styled.View`
  background-color: #f99000;
  width: 110px;
  border-radius: 6px;
  height: 22px;
  justify-content: center;
`;

export const EnterpriseTypeName = styled.Text`
  font-weight: bold;
  color: #f5f5f5;
  text-align: center;
`;
