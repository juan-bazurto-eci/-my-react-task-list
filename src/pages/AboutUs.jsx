import { Box, Image, Text, Flex, VStack } from "@chakra-ui/react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <Box className="about-us-container" p="4">
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW="6xl"
        mx="auto"
      >
        <Image src={"/logo.png"} boxSize="300px" alt="MindOasis Logo" />
        <VStack spacing={6} align="start">
          <Text className="about-us-description">
            Pioneros en el Tratamiento Inteligente de la Ansiedad En MindOasis,
            nos dedicamos a revolucionar el cuidado de la salud mental a través
            de la tecnología. Fundada en 2023, nuestra empresa se enfoca en el
            desarrollo de una aplicación de vanguardia que emplea inteligencia
            artificial para ofrecer tratamientos personalizados para la
            ansiedad.
          </Text>
          <Text className="about-us-description">
            Nuestra Misión Nuestra misión es simple pero poderosa: proporcionar
            alivio efectivo y accesible a millones de personas que luchan contra
            la ansiedad.{" "}
          </Text>
          <Text className="about-us-description">
            Creemos firmemente que la tecnología avanzada y la compasión humana
            pueden ir de la mano para crear soluciones de salud mental que
            realmente marquen la diferencia. Nuestra Tecnología La aplicación de
            MindOasis utiliza algoritmos de aprendizaje automático y
            procesamiento de lenguaje natural para entender y adaptarse a las
            necesidades individuales de cada usuario.{" "}
          </Text>
          <Text className="about-us-description">
            Nuestro enfoque se basa en técnicas de terapia cognitivo-conductual,
            mindfulness y otras estrategias de bienestar respaldadas por la
            ciencia. Nuestro Equipo Estamos orgullosos de contar con un equipo
            multidisciplinario de, ingenieros de biomedicos, especialistas en IA
            y profesionales de la salud mental. Juntos, trabajamos
            incansablemente para asegurar que nuestra aplicación no solo sea
            innovadora, sino también segura, empática y efectiva.{" "}
          </Text>
          <Text className="about-us-description">
            Nuestro Compromiso En MindOasis, estamos comprometidos con la mejora
            continua. Nos mantenemos al día con las últimas investigaciones en
            psicología y tecnología de IA para asegurar que nuestra aplicación
            sea siempre de la más alta calidad. Además, valoramos profundamente
            la retroalimentación de nuestros usuarios, lo que nos permite
            adaptar y mejorar constantemente nuestras soluciones.{" "}
          </Text>
          <Text className="about-us-description">
            Hacia el Futuro Mirando hacia el futuro, MindOasis se esfuerza por
            ser líder en el campo de la salud mental digital, expandiendo
            nuestras soluciones para abarcar una gama más amplia de trastornos y
            necesidades de bienestar. Nuestro sueño es crear un mundo donde el
            cuidado de la salud mental sea fácilmente accesible, altamente
            personalizado y profundamente efectivo para todos.
          </Text>
          <Text className="about-us-title">
            Fundadores Mariana Rincón Buitrago, Juan Esteban Pedraza, Juliana
            Mayorga Avila.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}
