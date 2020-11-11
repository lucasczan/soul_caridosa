import styled from 'styled-components/native';

export const CustomButton = styled.TouchableOpacity`
  width: 70%;
  align-items: center;
  justify-content: center;
  padding-vertical: 12px;
  border-radius: 20px;
  background-color: ${(props) => (props.main ? '#1E98D7' : 'transparent')};
  border: #1e98d7;
`;
