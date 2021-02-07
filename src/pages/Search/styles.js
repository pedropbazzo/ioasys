import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0px 15px;
  background-color: #3e3b47;
`;

export const Title = styled.Text`
  text-align: center;
  margin: 30px 0px;
  font-size: 27px;
  line-height: 29px;
  font-weight: bold;
  color: #fff;
  font-family: 'RobotoSlab-Regular';
`;

export const Name = styled(Input)`
  margin-top: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-bottom: 20px;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
  position: absolute;
  top: 0;
  border-radius: 9px;
`;

export const Content = styled.View`
  padding: 8px;
  background-color: #00000055;
  width: 100%;
  height: 100%;
  border-radius: 9px;
`;

export const TitleEnterprise = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const Subtitle = styled.Text`
  color: white;
  font-size: 15px;
`;

export const More = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  bottom: 36px;
  right: 12px;
  text-align: center;

  background-color: #f99000;
  width: 110px;
  border-radius: 6px;
  height: 22px;
  justify-content: center;
`;

export const Price = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  bottom: 16px;
  right: 16px;
  text-align: right;
  color: #f99000;
`;
