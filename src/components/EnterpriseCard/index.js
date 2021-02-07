import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Photo,
  Content,
  Title,
  Subtitle,
  More,
  Price,
} from './styles';

const EnterpriseCard = ({enterprises}) => {
  const {navigate} = useNavigation();

  return (
    <Container>
      {enterprises && enterprises.length > 0 && (
        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={enterprises}
          showsVerticalScrollIndicator={false}
          style={{flexGrow: 1}}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-start'}}
          renderItem={({item: enterprise, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigate('Enterprise', {id: enterprise.id});
              }}
              activeOpacity={0.8}
              key={String(enterprise.id)}
              style={[
                {
                  width: '100%',
                  height: 150,
                  backgroundColor: 'white',
                  marginBottom: 16,
                  borderRadius: 9,
                },
                (index === enterprises.length) != index
                  ? {borderTopWidth: 1, borderTopColor: '#EAEAEA'}
                  : {},
              ]}>
              <Photo
                source={{
                  uri: `https://empresas.ioasys.com.br/${enterprise.photo}`,
                }}
              />
              <Content>
                <Title>{enterprise.enterprise_name}</Title>
                <Subtitle>{`${enterprise.city}, ${enterprise.country}`}</Subtitle>
                <More>{`${enterprise.enterprise_type.enterprise_type_name}`}</More>
                <Price>{`$${parseFloat(enterprise.share_price).toFixed(
                  2,
                )}`}</Price>
              </Content>
            </TouchableOpacity>
          )}
        />
      )}

      {/* {photo && (
        <EnterprisePhoto
          source={{uri: `http://empresas.ioasys.com.br${photo}`}}
        />
      )}
      <Infos>
        <Name>{enterpriseName}</Name>
        <Dada>
          <Local>
            {city}, {country}
          </Local>
          <Type>
            <TypeName>Segment: {segment}</TypeName>
            <AboutMore onPress={onPress}>
              <TextButton>SEE MORE</TextButton>
            </AboutMore>
          </Type>
        </Dada>
      </Infos> */}
    </Container>
  );
};

export default EnterpriseCard;
