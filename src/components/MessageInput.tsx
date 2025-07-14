import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  onSend: (text: string) => void;
}

const InputContainer = styled.form`
  display: flex;
  padding: 16px;
  background: #f7fbfc;
  border-top: 1px solid #e0e0e0;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #cce3e3;
  font-size: 1rem;
  outline: none;
  margin-right: 8px;
  background: #fff;
`;

const SendButton = styled.button`
  background: rgb(36, 143, 201);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgb(12, 155, 232);
  }
`;

const MessageInput: React.FC<Props> = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Type your medical question..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
      <SendButton type="submit">Send</SendButton>
    </InputContainer>
  );
};

export default MessageInput;
