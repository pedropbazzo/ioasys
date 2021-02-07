import React, {useState, useCallback, useEffect} from 'react';
import {Alert, ScrollView} from 'react-native';

import api from '../../services/api';

import {Container, Title, Name, SubmitButton} from './styles';

import EnterpriseCard from '../../components/EnterpriseCard';

const Search = () => {
  const [name, setName] = useState('');

  const [enterprises, setEnterprises] = useState([]);
  const [enterprisesFilter, setEnterprisesFilter] = useState([]);
  const [enterpriseType, setEnterpriseType] = useState(null);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    async function loadEnterprises() {
      try {
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
      } catch (error) {
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
        setEnterprisesFilter(data);
        setName('');
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Search Enterprise</Title>

        <Name
          placeholder="Name enterprise or type"
          autoCorrect={false}
          autoCapitalize="none"
          value={name}
          onChangeText={setName}
        />
        <SubmitButton onPress={() => enterprisesFiltered(name)}>
          Search
        </SubmitButton>

        {enterprisesFilter.length > 0 && (
          <EnterpriseCard enterprises={enterprisesFilter} />
        )}
      </ScrollView>
    </Container>
  );
};

export default Search;
