import { useState } from "react";
import ChatBotForm from "../components/ChatBotForm";
import ChatBotSummary from "../components/ChatBotSummary";
import { Container } from "@chakra-ui/react";
import Header from "../components/Header";

export default function ChatBot() {
  const [answers, setAnswers] = useState(null);

  const handleSubmit = (newAnswers) => {
    setAnswers(newAnswers);
  };

  return (
    <Container maxW="xl" p="4">
      <Header />
      {!answers ? (
        <ChatBotForm onSubmit={handleSubmit} />
      ) : (
        <ChatBotSummary answers={answers} />
      )}
    </Container>
  );
}
