import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Bachground from '~/components/Background';

import api from '~/services/api';

import { Container, ProviderList, Provider, Avatar, Name } from './styles';

export default function SelectProvider({ navigation }) {
  const [providers, SetProviders] = useState([]);

  useEffect(() => {
    async function loadProvider() {
      const response = await api.get('/provider');

      SetProviders(response.data);
    }

    loadProvider();
  }, []);
  return (
    <Bachground>
      <Container>
        <ProviderList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider onPress={() => navigation.navigate('SelectDateTime')}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Bachground>
  );
}
SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
