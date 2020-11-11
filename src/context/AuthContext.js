import React, {createContext, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(false);

  const SignUpContext = useCallback(async (user) => {
    await AsyncStorage.clear();
    AsyncStorage.setItem('@User', JSON.stringify(user));
  }, []);

  const SignIn = useCallback(async (credentials) => {
    const user = await AsyncStorage.getItem('@User');
    if (user) {
      const obj = JSON.parse(user);
      obj.email === credentials.email && obj.password === credentials.password
        ? setToken(true)
        : alert('credenciais incorretas');
    } else {
      alert('Usuario não cadastrado');
    }
  }, []);

  const SignOut = useCallback(() => {
    setToken(false);
  }, []);

  return (
    <AuthContext.Provider value={{token, SignUpContext, SignIn, SignOut}}>
      {children}
    </AuthContext.Provider>
  );
};
