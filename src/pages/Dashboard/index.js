import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Appointment from '~/components/Appointment';
import { Container, Title, List } from './styles';

import api from '~/services/api';

function Dashboard({ isFocused }) {
  const [appoitments, setAppointments] = useState([]);

  async function loadAppointmets() {
    const response = await api.get('/appointment');

    setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointmets();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`/appointment/${id}`);
    setAppointments(
      appoitments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appoitments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
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

export default withNavigationFocus(Dashboard);
