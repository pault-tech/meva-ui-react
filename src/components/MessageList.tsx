import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import type { Message } from "./ChatWindow";
import MessageBubble from "./MessageBubble";

interface Props {
  messages: Message[];
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MessageList: React.FC<Props> = ({ messages }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <List>
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      <div ref={bottomRef} />
    </List>
  );
};

export default MessageList;
