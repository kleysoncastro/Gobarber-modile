import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  align-self: center;
  margin-top: 30px;
`;
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
