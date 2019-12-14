import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';
import { Container, Title, List } from './styles';

export default function Dashboard() {
  const data = [1, 2, 3, 4, 5];
  return (
    <Background>
      <Container>
        <Title id="1">Agendamentos</Title>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
