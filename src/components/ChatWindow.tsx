import React, { useState } from "react";
import styled from "styled-components";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

const ChatContainer = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 64, 128, 0.08);
  width: 100%;
  max-width: 95vw;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  background: rgb(36, 143, 201);
  color: #ffff;
  padding: 20px;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 20px 16px 0 16px;
  overflow-y: auto;
  background: rgb(158, 216, 232);
  max-height: 80vh;
`;

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hello! I am your medical assistant. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const handleSend = (text: string) => {
    const userMsg: Message = {
      id: messages.length + 1,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "bot",
          text: "Thank you for your message. An AI assistant will assist you shortly.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1200);
  };

  return (
    <ChatContainer>
      <Header>🩺 Meva Medical Assistant 🩺</Header>
      <ChatBody>
        <MessageList messages={messages} />
      </ChatBody>
      <MessageInput onSend={handleSend} />
    </ChatContainer>
  );
};

export default ChatWindow;
