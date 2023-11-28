import { Box, Heading, Text, Image, Flex, VStack } from "@chakra-ui/react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <Box className="container" p="4" bg="#f0f8ff">
      <Flex direction="column" align="center" justify="center">
        <Image src={"/logo.png"} boxSize="300px" alt="MindOasis Logo" />
        <Text className="title" fontSize="xl" color="#007BFF">
          {`"Un oasis para tu mente, un respiro para tu alma."`}
        </Text>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        mt="6"
        align="center"
        justify="center"
        gap={{ md: 8 }}
      >
        <VStack spacing={4} align="center" maxW={{ md: "50%" }} mr={{ md: 8 }}>
          <Heading size="md" color="#007BFF">
            Nuestra historia
          </Heading>
          <Text className="subtitle" fontSize="md" color="#333">
            Todo comenzó en el aula, pero rápidamente trascendió sus límites.
            Como estudiantes de ingeniería biomédica apasionados por hacer una
            diferencia real en el mundo, nos encontramos en una asignatura de
            gestión de empresas.{" "}
          </Text>
          <Text className="subtitle" fontSize="md" color="#333">
            Allí, nos dimos cuenta de que podíamos combinar nuestras habilidades
            técnicas con una visión empresarial para abordar algunos de los
            problemas más acuciantes en el campo de la salud. Al observar de
            cerca los desafíos que enfrentan las personas con diversos
            trastornos de salud, vimos una oportunidad única.{" "}
          </Text>
          <Text className="subtitle" fontSize="md" color="#333">
            Nos propusimos crear soluciones innovadoras que no solo fueran
            avanzadas desde un punto de vista técnico, sino también accesibles y
            amigables para aquellos que las necesitan. Esta combinación de
            ingeniería biomédica y sensibilidad empresarial nos ha permitido
            acercarnos a los problemas de salud de una manera integral.{" "}
          </Text>
          <Text className="subtitle" fontSize="md" color="#333">
            No solo buscamos soluciones técnicamente viables, sino también
            económicamente accesibles y fácilmente integrables en la vida diaria
            de las personas. Nuestro viaje ha sido más que una aventura
            académica; se ha convertido en una misión para marcar una diferencia
            positiva. Al compartir nuestra historia, esperamos inspirar a otros
            a unirse a nosotros en este camino emocionante, donde la innovación
            y la compasión se unen para mejorar la vida de las personas en todo
            el mundo.{" "}
          </Text>
          <Text className="subtitle" fontSize="md" color="#333">
            ¡Bienvenidos a nuestra aventura! Estamos emocionados de tenerlos con
            nosotros en este viaje hacia un futuro más saludable y feliz.
          </Text>
        </VStack>
        <Box
          as="iframe"
          src="https://www.youtube.com/embed/VlhQdl5emF0?si=8T3K9gTJHyow_73X"
          width={{ base: "100%", md: "50%" }}
          height="500"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          ml={{ md: 8 }}
        />
      </Flex>
    </Box>
  );
}
