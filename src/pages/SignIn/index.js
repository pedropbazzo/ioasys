import React, {useState} from 'react';
import {Image, View, KeyboardAvoidingView, Platform} from 'react-native';

import {useAuth} from '../../hooks/auth';

import logo from '../../assets/logo.png';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useAuth();
  const {navigate} = useNavigation();

  async function handleSubmit() {
    setIsLoading(true);
    await signIn({
      email,
      password,
    });
    setIsLoading(false);
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <Container>
        {isLoading && <Loading />}
        <Image source={logo} style={{resizeMode: 'center'}} />

        <View style={{width: '100%', padding: 20}}>
          <Input
            placeholder="Email address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Button onPress={() => handleSubmit(email, password)}>Sign In</Button>
        </View>
      </Container>
      <CreateAccountButton
        onPress={() => {
          navigate('SignUp');
        }}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Create an account</CreateAccountButtonText>
      </CreateAccountButton>
    </KeyboardAvoidingView>
  );
};
export default SignIn;
