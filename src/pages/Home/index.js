import React, {useCallback, useEffect, useState} from 'react';
import api from '../../services/api';
import {Text, ScrollView, Alert} from 'react-native';

import {useAuth} from '../../hooks/auth';

import EnterpriseCard from '../../components/EnterpriseCard';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Loading from '../../components/Loading';

import {Container, Tag, ContainerCardEnterprise} from './styles';

const Home = () => {
  const [enterprises, setEnterprises] = useState([]);
  const [enterpriseType, setEnterpriseType] = useState(null);
  const [filters, setFilters] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const {signOut} = useAuth();

  useEffect(() => {
    async function loadEnterprises() {
      try {
        setIsLoading(true);
        let query_types = `?enterprise_types=${enterpriseType}`;

        let response;
        if (enterpriseType) {
          response = await api.get(`/enterprises${query_types}`);
        } else {
          response = await api.get(`/enterprises`);
        }

        if (response.status === 200) {
          const data = response.data.enterprises;

          setEnterprises(data);
          handleTypes(data);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log('error request ', error);
        if (error.response?.status === 401) {
          console.log('TOKEN EXPIRADO');
          await signOut();
        } else {
          Alert.alert('Error', 'Internal error ');
        }
      }
    }

    loadEnterprises();
  }, [enterpriseType]);

  const enterprisesFiltered = useCallback(async (input) => {
    try {
      let response = await api.get(`/enterprises?name=${input}`);

      if (response.status === 200) {
        const data = response.data.enterprises;

        setEnterprises(data);
      }
    } catch (error) {
      console.log('error request ', error);
      if (error.response?.status === 401) {
        console.log('TOKEN EXPIRADO');
        await signOut();
      } else {
        Alert.alert('Error', 'Internal error ');
      }
    }
  }, []);

  function handleTypes(data = []) {
    const obj = data.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.enterprise_type.enterprise_type_name]: cur.enterprise_type,
      }),
      {},
    );
    let array = [];

    for (i in obj) {
      array.push(obj[i]);
    }

    setFilters(array);
  }

  return (
    <Container>
      <Header>
        <Input
          placeholder="Search"
          onChangeText={(text) => enterprisesFiltered(text)}
        />
      </Header>
      {isLoading && <Loading />}

      <ContainerCardEnterprise>
        <ScrollView
          style={{height: 40, maxHeight: 60}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Tag
            style={{backgroundColor: !enterpriseType ? '#ff9900' : '#3e3b47'}}
            onPress={() => {
              setEnterpriseType(null);
            }}>
            <Text
              style={{
                color: !enterpriseType ? '#000' : '#FFF',
                fontWeight: 'bold',
              }}>
              All
            </Text>
          </Tag>
          {filters &&
            filters.map((filter) => (
              <Tag
                key={filter.id}
                style={{
                  backgroundColor:
                    filter.id === enterpriseType ? '#ff9900' : '#3e3b47',
                }}
                onPress={() => {
                  setEnterpriseType(filter.id);
                }}>
                <Text
                  style={{
                    color: filter.id === enterpriseType ? '#000' : '#fff',
                  }}>
                  {filter.enterprise_type_name}
                </Text>
              </Tag>
            ))}
        </ScrollView>

        {enterprises && enterprises.length > 0 && (
          <EnterpriseCard enterprises={enterprises} />
        )}
      </ContainerCardEnterprise>
    </Container>
  );
};

export default Home;
