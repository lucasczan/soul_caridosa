import React, {useContext, useState} from 'react';
import {Text, Image} from 'react-native';

import {Container} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../img/logo.png';
import {AuthContext} from '../../context/AuthContext';
const LogIn = () => {
  const [credentials, setCredentials] = useState({});
  const navigator = useNavigation();
  const {SignIn} = useContext(AuthContext);

  return (
    <Container>
      <Image style={{width: '70%', height: 65}} source={Logo} />
      <Input
        onChange={(text) => setCredentials({...credentials, email: text})}
        style={{marginTop: 20}}
        placeholderText="Email..."
      />
      <Input
        onChange={(text) => setCredentials({...credentials, password: text})}
        placeholderText="Senha..."
        maxLength={8}
        password
      />
      <Button
        onPress={() => SignIn(credentials)}
        main
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 3.84,
          elevation: 5,
          marginTop: 80,
        }}>
        <Text style={{color: '#fff'}}>ENTRAR</Text>
      </Button>
      <Button
        onPress={() => navigator.navigate('Cadastro')}
        style={{
          marginTop: 20,
        }}>
        <Text style={{color: '#1e98d7'}}>CRIAR CONTA</Text>
      </Button>
    </Container>
  );
};

export default LogIn;
