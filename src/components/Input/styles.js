import styled from 'styled-components/native';

export const CustomInput = styled.TextInput`
  width: 70%;
  border-bottom-width: 1px;
  border-color: ${(props) => (props.focused ? '#1E98D7' : 'black')};
`;
