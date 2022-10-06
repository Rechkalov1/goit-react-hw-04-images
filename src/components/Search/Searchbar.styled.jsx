import styled from 'styled-components';
export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 30px;
  background-color: blue;
`;
export const Form = styled.form`
  position: absolute;
  padding-top: 3px;
  transform: translate(-50%, 0%);
  left: 50%;
`;
export const Input = styled.input`
  height: 20px;
`;
export const Button = styled.button`
  padding: 4px 10px;
  margin-left: 5px;
  cursor: pointer;
  :hover {
    background-color: #4d4dbb;
  }
`;
