import React, {useState, useEffect} from 'react';
import {useAuth} from '../../hooks/auth';

import {
  Container,
  UploadButton,
  UploadText,
  TextTest,
  Name,
  Email,
  Local,
  Balance,
  AllBalance,
  Button,
  ButtonText,
  ModalContainer,
  ButtonBack,
  Input,
} from './styles';

import {Modal, Platform, Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Loading from '../../components/Loading';

const Profile = () => {
  const {investor, signOut} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState(investor?.investor_name);

  useEffect(() => {
    async function loadInvestor() {
      if (investor.id === 0) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    }

    loadInvestor();
  }, [investor]);

  return (
    <Container>
      {/* {isLoading && <Loading />} */}

      <UploadButton onPress={() => Alert.alert('Em desenvolvimento')}>
        <UploadText>+</UploadText>
      </UploadButton>

      <Name numberOfLines={1}>
        Name: <TextTest>{investor?.investor_name}</TextTest>
      </Name>
      <Email numberOfLines={1}>
        Email: <TextTest>{investor?.email}</TextTest>
      </Email>

      <Local>
        City: <TextTest>{investor?.city}</TextTest>, Country:{' '}
        <TextTest>{investor?.country}</TextTest>
      </Local>
      <Balance>
        Saldo Disponivel: <TextTest>${investor?.balance?.toFixed(2)}</TextTest>
      </Balance>
      <AllBalance>
        Na Carteira:
        <TextTest>${investor?.portfolio_value?.toFixed(2)}</TextTest>
      </AllBalance>

      <Button bg="#ff9000" onPress={() => setOpen(true)}>
        <ButtonText color="#000">Atualizar perfil</ButtonText>
      </Button>
      <Button bg="#f00" onPress={() => signOut()}>
        <ButtonText color="#fff">Sair</ButtonText>
      </Button>

      <Modal visible={open} animationType="slide" transparent={true}>
        <ModalContainer behavior={Platform.OS === 'android' ? '' : 'padding'}>
          <ButtonBack onPress={() => setOpen(false)}>
            <Feather name="arrow-left" size={22} color="#121212" />
            <ButtonText color="#121212">Voltar</ButtonText>
          </ButtonBack>

          <Input
            placeholder={investor?.name}
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <Button bg="#878787" onPress={() => {}}>
            <ButtonText color="#f1f1f1">Atualizar</ButtonText>
          </Button>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Profile;
