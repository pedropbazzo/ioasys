import React, {useState} from 'react';
import {Image, View, KeyboardAvoidingView, Platform, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import logo from '../../assets/logo.png';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {Container, BackToSignIn, BackToSignInText} from './styles';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

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
            placeholder="Name"
            placeholderTextColor="#666360"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            placeholder="Email address"
            placeholderTextColor="#666360"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            placeholder="Password"
            placeholderTextColor="#666360"
            secureTextEntry
          />

          <Button
            onPress={() =>
              Alert.alert('It is not possible to register on this platform.')
            }>
            Create account
          </Button>
        </View>
      </Container>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Back to login</BackToSignInText>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
