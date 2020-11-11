import React from 'react';
import {View} from 'react-native';

import {CustomButton} from './styles';

const Button = ({children, ...props}) => {
  return (
    <CustomButton onPress={props.onPress} style={props.style} main={props.main}>
      {children}
    </CustomButton>
  );
};

export default Button;
