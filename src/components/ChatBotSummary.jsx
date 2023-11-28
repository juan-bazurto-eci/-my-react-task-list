import PropTypes from "prop-types";
import { Box, Heading, Text } from "@chakra-ui/react";
import "./ChatBotSummary.css";

const ChatBotSummary = ({ answers }) => {
  const responses = [
    `<span style="color: #007BFF">Respiración Profunda:</span> Inspira profundamente por la nariz durante 4 segundos, mantén la respiración durante 4 segundos y luego exhala lentamente por la boca durante 6 segundos. Repite varias veces.`,
    `<span style="color: #007BFF">Escaneo Corporal:</span> Cierra los ojos y concéntrate en cada parte del cuerpo, comenzando por los pies y avanzando hacia arriba. Observa cualquier tensión y trata de relajar cada parte a medida que avanzas.`,
    `<span style="color: #007BFF">Visualización Positiva:</span> cierra los ojos e imagina un lugar tranquilo y relajante y pon música que represente ese lugar especificamente.`,
    `<span style="color: #007BFF">Ejercicio de Liberación de Tensión:</span> Tensa los músculos de una parte del cuerpo, como los hombros, durante unos segundos y luego suelta repentinamente. Siente la diferencia entre la tensión y la relajación.`,
    `<span style="color: #007BFF">Mindfulness en la Respiración:</span> centra en tu respiración sin tratar de cambiarla. Simplemente observa cómo entra y sale el aire, y regresa tu atención a la respiración cada vez que te distraigas.`,
    `<span style="color: #007BFF">Yoga Ligero o Estiramientos Suaves:</span> secuencia de yoga simple o estiramientos suaves para liberar la tensión física y mental.`,
    `<span style="color: #007BFF">Escucha Consciente:</span> centrate en sonidos ambientales, como el viento, la lluvia o la música tranquila. Esta práctica puede ayudar a calmar la mente.`,
    `<span style="color: #007BFF">Ejercicio de Agradecimiento:</span> reflexiona sobre tres cosas por las que estás agradecido en ese momento. Este ejercicio puede cambiar el enfoque mental hacia aspectos positivos.`,
    `<span style="color: #007BFF">Masaje de Manos o pies:</span> Realiza movimientos suaves de masaje en las manos o pies para liberar la tensión acumulada.`,
  ];

  const selectedResponses = [];
  const numberOfResponses = Math.floor(Math.random() * 3) + 1; // Selección aleatoria de 1 a 3

  while (selectedResponses.length < numberOfResponses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];
    if (!selectedResponses.includes(response)) {
      selectedResponses.push(response);
    }
  }

  return (
    <Box className="container" p="4" bg="#f0f8ff">
      <Heading className="title" size="xl" color="#007BFF">
        {answers.nombre}
      </Heading>
      <Text>
        Dadas tus respuestas te recomendamos que apliques las siguientes
        estrategias en los momentos en los que te sientas intranquilo:
      </Text>
      <br />
      {selectedResponses.map((response, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: response }} />
      ))}
    </Box>
  );
};

ChatBotSummary.propTypes = {
  answers: PropTypes.object.isRequired,
};

export default ChatBotSummary;
