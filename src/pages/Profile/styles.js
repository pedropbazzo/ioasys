import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #312e38;
`;

export const UploadButton = styled.TouchableOpacity`
  margin-top: 20%;
  background: #fff;
  width: 165px;
  height: 165px;
  border-radius: 90px;

  justify-content: center;
  align-items: center;

  z-index: 5;
`;

export const UploadText = styled.Text`
  z-index: 9;
  position: absolute;
  font-size: 55px;
  color: #3b3b3b;
  opacity: 0.4;
`;

export const Avatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;

  opacity: 0.9;
`;

export const TextTest = styled.Text`
  color: #ff9900;
  font-weight: bold;
`;

export const Name = styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 28px;

  color: #fff;
  font-weight: bold;
  font-family: 'RobotoSlab-Regular';
`;

export const Email = styled.Text`
  margin: 10px 10px;

  font-size: 20px;
  color: #ddd;
  font-family: 'RobotoSlab-Regular';
`;

export const Local = styled.Text`
  font-size: 24px;
  line-height: 27px;
  margin-bottom: 20px;
  color: #ddd;
  font-family: 'RobotoSlab-Regular';
`;

export const Balance = styled.Text`
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 20px;
  color: #ddd;
  font-family: 'RobotoSlab-Regular';
`;

export const AllBalance = styled.Text`
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 20px;
  color: #ddd;
  font-family: 'RobotoSlab-Regular';
`;

export const Button = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg};

  width: 80%;
  height: 45px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.color};
  font-family: 'RobotoSlab-Regular';
`;

export const ModalContainer = styled.KeyboardAvoidingView`
  width: 100%;
  height: 70%;
  background-color: #fff;

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  left: 25px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;

  background: #ddd;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  font-family: 'RobotoSlab-Regular';
`;
