import styled from 'styled-components/native';

export const Container = styled.View``;

export const Card = styled.View`
  align-items: center;
  background: ${props => (props.last ? '#fff' : 'transparent')};
  border-radius: 5px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.08);
  height: 70px;
  flex-direction: row;
  margin: 10px 8px;
  padding: 0 15px;
`;

export const Date = styled.View``;

export const Separator = styled.View`
  border-right-color: rgba(0, 0, 0, 0.2);
  border-right-width: 1px;
  margin: 0 15px;
  height: 22px;
`;

export const Day = styled.Text`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.64);
`;

export const Month = styled.Text`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.64);
`;

export const TransactionType = styled.Text`
  margin-right: 4px;
`;

export const Column = styled.View``;

export const Row = styled.View`
  flex-direction: row;
`;

export const Time = styled.Text`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.64);
`;

export const Name = styled.Text`
  font-weight: bold;
`;

export const Value = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Balance = styled.Text`
  text-align: right;
  font-size: 18px;
`;
