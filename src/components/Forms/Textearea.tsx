import React from 'react';
import { Label, Wrapper } from './styles';

interface TexteareaProps {
  name: string;
  error: string;
  id: string;
  value: string;
  onChange: ({ target }: { target: HTMLTextAreaElement }) => void;
}

const Textearea = ({ name, id, error, onChange, value }: TexteareaProps) => {
  return (
    <Wrapper>
      <Label>Mensagem </Label>
      <textarea
        name={name}
        cols={30}
        rows={8}
        value={value}
        onChange={onChange}
        id={id}
      />
      {error && <p>{error}</p>}
    </Wrapper>
  );
};

export default Textearea;
