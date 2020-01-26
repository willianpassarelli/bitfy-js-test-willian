import React, { useMemo } from 'react';
import { parseISO, format, isToday } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Title,
  Card,
  Date,
  Day,
  Month,
  Separator,
  TransactionType,
  Time,
  Column,
  Row,
  Name,
  Value,
  Balance,
} from './styles';

export default function TransactionsCard({ data }) {
  const day = useMemo(() => {
    return format(parseISO(data.date), 'dd', {
      locale: pt,
    });
  }, [data.date]);

  const month = useMemo(() => {
    return format(parseISO(data.date), 'MMM', {
      locale: pt,
    }).toUpperCase();
  }, [data.date]);

  const hours = useMemo(() => {
    return format(parseISO(data.date), 'H:mm', {
      locale: pt,
    });
  }, [data.date]);

  return (
    <Container>
      <Card last={data.last}>
        <Date>
          <Day>{day}</Day>
          <Month>{month}</Month>
        </Date>
        <Separator />
        <Column>
          <Row>
            <TransactionType>Envio para</TransactionType>
            <Name>{data.name}</Name>
          </Row>
          <Time>{hours}</Time>
        </Column>
        <Value>
          <Balance>{data.value} BTC</Balance>
        </Value>
      </Card>
    </Container>
  );
}
