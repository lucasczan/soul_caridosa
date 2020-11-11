import React, {useState} from 'react';

import {CustomInput} from './styles';

const Input = ({placeholderText, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <CustomInput
      onChangeText={props.onChange}
      style={props.style}
      focused={isFocused}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      placeholder={placeholderText}
      maxLength={props.maxLength}
      secureTextEntry={props.password}
    />
  );
};

export default Input;
