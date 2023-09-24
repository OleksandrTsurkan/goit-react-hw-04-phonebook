import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 370px;
  padding: 8px;
  gap: 18px;
  flex-wrap: wrap;
  border: 2px solid black;
`;

export const Input = styled.input`
  height: 25px;
  padding: 4px;
  width: 280px;
  margin-left: 8 px;
  border-radius: 5px;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    border: 3px dotted #3a7999;
    color: #3a7999;
    background: rgba(0, 0, 0, 0);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const Labelcontact = styled.label`
  width: 400px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 4px 5px;
`;

export const ButtonSend = styled.button`
  border: 3px solid #3a7999;
  border-radius: 20px;
  background-color: #fffcfc;
  cursor: pointer;

  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    border: 3px dotted #3a7999;
    color: #3a7999;
    background: rgba(0, 0, 0, 0);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  }
`;
