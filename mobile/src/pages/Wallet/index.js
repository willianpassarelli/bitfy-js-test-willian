import React, { useState, useMemo, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Background from '~/components/Background';
import TranscationsCard from '~/components/TransactionsCard';

import { signOut } from '~/store/modules/auth/actions';
import { formatPrice } from '~/util/format';

import data from '~/data/transactions';

import api from '~/services/api';

import {
  Container,
  Header,
  User,
  Name,
  Welcome,
  ButtonSignOut,
  ButtonText,
  Display,
  TextDisplay,
  Balance,
  DisplayQuotation,
  TextQuotation,
  Value,
  TranscationsList,
  Title,
} from './styles';

export default function Wallet() {
  const name = useSelector(state => state.user.profile.name);

  const dispatch = useDispatch();

  const [refresh, setRefresh] = useState(false);
  const [balance, setBalance] = useState(0.12);
  const [btc, setBtc] = useState(0);

  async function loadLastQuotation() {
    try {
      const response = await api.get('ticker');

      const { last } = response.data;

      setTimeout(() => {
        setBtc(last);
        setRefresh(false);
      }, 2000);
    } catch (err) {
      Alert.alert('Falha ao atualizar', 'Não foi possível atualizar o valor');
    }
  }

  useEffect(() => {
    loadLastQuotation();
  }, []);

  const quotation = useMemo(() => {
    const price = btc * balance;
    return formatPrice(price);
  }, [balance, btc]);

  function handleSignOut() {
    dispatch(signOut());
  }

  function handleQuotationRefresh() {
    setRefresh(true);
    loadLastQuotation();
  }

  return (
    <Background>
      <Container>
        <Header>
          <User>
            <Name>Olá {name}.</Name>
            <Welcome>Bem vindo,</Welcome>
          </User>
          <ButtonSignOut onPress={handleSignOut}>
            <ButtonText>SAIR</ButtonText>
          </ButtonSignOut>
        </Header>
        <Display>
          <TextDisplay>Saldo disponível</TextDisplay>
          <Balance>{balance} BTC</Balance>
        </Display>
        <DisplayQuotation onPress={handleQuotationRefresh}>
          <TextQuotation>Valor aproximado em Reais</TextQuotation>
          {refresh ? (
            <ActivityIndicator size="small" color="#2699fb" />
          ) : (
            <Value>{quotation}</Value>
          )}
        </DisplayQuotation>
        <TranscationsList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <TranscationsCard data={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Title>{title}</Title>
          )}
        />
      </Container>
    </Background>
  );
}
