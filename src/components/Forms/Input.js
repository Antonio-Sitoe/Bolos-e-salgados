import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Label = styled.label`
  font-weight: bold;
  font-size: 0.9rem;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 0.6rem;

  input {
    background: #ffffff;
    border: 3px solid #e0dfdf;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
    outline: none;
    &:hover,
    &:focus {
      border: 3px solid ${theme.colors.blackHover};
    }
  }
  p {
    color: ${theme.colors.tomato};
  }
`;

const Input = (
  { placeholder, type, value, label, name, onChange, onBlur, error },
  key
) => {
  return (
    <Wrapper key={key}>
      <Label htmlFor={name}>{label}</Label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </Wrapper>
  );
};

export default Input;
