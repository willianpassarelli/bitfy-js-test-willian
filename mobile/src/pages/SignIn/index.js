import React, { useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import Button from '~/components/Button';

import { Container, Form, FormInput, SignLink, SignLinkText } from './styles';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();

  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Form>
        <FormInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Digite seu e-mail"
        />
        <FormInput
          value={password}
          onChangeText={setPassword}
          ref={passwordRef}
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          placeholder="Digite sua senha"
        />
        <Button onPress={handleSubmit} loading={loading}>
          ENTRAR
        </Button>
      </Form>
      
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar uma conta</SignLinkText>
        </SignLink>
    </Container>
  );
}
