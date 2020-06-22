import * as React from "react";
import styled from "styled-components";
import ReachAlert from "@reach/alert";
import FlipMove from "react-flip-move";

const StyledAlert = styled(ReachAlert)`
  background: ${(props) => props.theme.success};
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
  width: 200px;
  margin: auto;
  margin-bottom: 30px;
`;

const NewMessageAnimationWrapper = styled(FlipMove)`
  position: fixed !important;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const AlertQueueContext = React.createContext({
  messages: [],
  addMessage: (message: string) => {},
});

export const AlertProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = React.useState([]);
  const addMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
    setTimeout(() => {
      console.log(message, messages);
      setMessages((prevMessages) => prevMessages.slice(1));
    }, 5000);
  };

  return (
    <AlertQueueContext.Provider value={{ messages, addMessage }}>
      {children}
      <NewMessageAnimationWrapper>
        {messages.map((message, index) => (
          <StyledAlert key={index}>{message}</StyledAlert>
        ))}
      </NewMessageAnimationWrapper>
    </AlertQueueContext.Provider>
  );
};
