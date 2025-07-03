import React from "react";
import styled, { css } from "styled-components";
import type { Message } from "./ChatWindow";

interface Props {
  message: Message;
}

const Bubble = styled.div<{ sender: "user" | "bot" }>`
  max-width: 75%;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 1rem;
  line-height: 1.5;
  position: relative;
  background: ${({ sender }) =>
    sender === "user" ? "rgb(36, 143, 201)" : "#eaf6f6"};
  color: ${({ sender }) => (sender === "user" ? "#fff" : "#222")};
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  box-shadow: 0 2px 8px rgba(230, 237, 236, 0.85);

  ${({ sender }) =>
    sender === "user"
      ? css`
          border-bottom-right-radius: 4px;
        `
      : css`
          border-bottom-left-radius: 4px;
        `}
`;

const Timestamp = styled.span`
  display: block;
  font-size: 0.75rem;
  color: #rgb(121, 124, 126);
  margin-top: 4px;
  text-align: right;
`;

const MessageBubble: React.FC<Props> = ({ message }) => (
  <Bubble sender={message.sender}>
    {message.text}
    <Timestamp>{message.timestamp}</Timestamp>
  </Bubble>
);

export default MessageBubble;
