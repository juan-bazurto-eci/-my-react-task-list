import { useState } from "react";
import PropTypes from "prop-types";
import "./ChatBotForm.css";
const ChatBotForm = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    nombre: "",
    genero: "",
    diagnosticoAnsiedad: "",
    nivelFamiliaridad: "",
    sintomas: [],
    frecuenciaAnsiedad: "",
    nivelEstres: "",
    condicionesMedicas: [],
    tecnicasRelajacion: "",
    tratamientoAnsiedad: [],
    objetivosApp: [],
    preferenciaDuracionEjercicios: "",
    preferenciaTiempoEjercicios: [],
    seguimientoProgreso: "",
    preferenciaComunicacion: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    let newValues = answers[name];
    if (event.target.checked) {
      newValues = [...newValues, value];
    } else {
      newValues = newValues.filter((item) => item !== value);
    }
    setAnswers({ ...answers, [name]: newValues });
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(answers);
  };

  switch (currentStep) {
    case 1:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={answers.nombre}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <button type="button" onClick={nextStep} disabled={!answers.nombre}>
              Siguiente
            </button>
          </div>
        </form>
      );
    case 2:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>Género:</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  checked={answers.genero === "Masculino"}
                  name="genero"
                  value="Masculino"
                  onChange={handleInputChange}
                />
                Masculino
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.genero === "Femenino"}
                  name="genero"
                  value="Femenino"
                  onChange={handleInputChange}
                />
                Femenino
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.genero === "No binario"}
                  name="genero"
                  value="No binario"
                  onChange={handleInputChange}
                />
                No binario
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.genero === "Prefiero no responder"}
                  name="genero"
                  value="Prefiero no responder"
                  onChange={handleInputChange}
                />
                Prefiero no responder
              </label>
            </div>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button type="button" onClick={nextStep} disabled={!answers.genero}>
              Siguiente
            </button>
          </div>
        </form>
      );
    case 3:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>
              ¿Has sido diagnosticado previamente con algún trastorno de
              ansiedad?
            </label>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  checked={answers.diagnosticoAnsiedad === "Sí"}
                  name="diagnosticoAnsiedad"
                  value="Sí"
                  onChange={handleInputChange}
                />
                Sí
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.diagnosticoAnsiedad === "No"}
                  name="diagnosticoAnsiedad"
                  value="No"
                  onChange={handleInputChange}
                />
                No
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.diagnosticoAnsiedad === "No estoy seguro"}
                  name="diagnosticoAnsiedad"
                  value="No estoy seguro"
                  onChange={handleInputChange}
                />
                No estoy seguro
              </label>
            </div>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={!answers.diagnosticoAnsiedad}
            >
              Siguiente
            </button>
          </div>
        </form>
      );
    case 4:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>
              ¿Cuál es tu nivel de familiaridad con la ansiedad y las técnicas
              de control?
            </label>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  checked={answers.nivelFamiliaridad === "Muy familiarizado"}
                  name="nivelFamiliaridad"
                  value="Muy familiarizado"
                  onChange={handleInputChange}
                />
                Muy familiarizado
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.nivelFamiliaridad === "Algo familiarizado"}
                  name="nivelFamiliaridad"
                  value="Algo familiarizado"
                  onChange={handleInputChange}
                />
                Algo familiarizado
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.nivelFamiliaridad === "Poco familiarizado"}
                  name="nivelFamiliaridad"
                  value="Poco familiarizado"
                  onChange={handleInputChange}
                />
                Poco familiarizado
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.nivelFamiliaridad === "No familiarizado"}
                  name="nivelFamiliaridad"
                  value="No familiarizado"
                  onChange={handleInputChange}
                />
                No familiarizado
              </label>
            </div>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={!answers.nivelFamiliaridad}
            >
              Siguiente
            </button>
          </div>
        </form>
      );
    case 5:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>
              Por favor, enumera los síntomas de ansiedad que experimentas con
              regularidad:
            </label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={answers.sintomas.includes(
                    "Palpitaciones o taquicardia"
                  )}
                  name="sintomas"
                  value="Palpitaciones o taquicardia"
                  onChange={handleCheckboxChange}
                />
                Palpitaciones o taquicardia
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.sintomas.includes(
                    "Respiración acelerada o dificultad para respirar"
                  )}
                  name="sintomas"
                  value="Respiración acelerada o dificultad para respirar"
                  onChange={handleCheckboxChange}
                />
                Respiración acelerada o dificultad para respirar
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.sintomas.includes("Sudoración excesiva")}
                  name="sintomas"
                  value="Sudoración excesiva"
                  onChange={handleCheckboxChange}
                />
                Sudoración excesiva
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.sintomas.includes("Temblores o nerviosismo")}
                  name="sintomas"
                  value="Temblores o nerviosismo"
                  onChange={handleCheckboxChange}
                />
                Temblores o nerviosismo
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.sintomas.includes(
                    "Pensamientos intrusivos o preocupaciones constantes"
                  )}
                  name="sintomas"
                  value="Pensamientos intrusivos o preocupaciones constantes"
                  onChange={handleCheckboxChange}
                />
                Pensamientos intrusivos o preocupaciones constantes
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.sintomas.includes(
                    "Dificultad para concentrarse"
                  )}
                  name="sintomas"
                  value="Dificultad para concentrarse"
                  onChange={handleCheckboxChange}
                />
                Dificultad para concentrarse
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.sintomas.includes("Irritabilidad")}
                  name="sintomas"
                  value="Irritabilidad"
                  onChange={handleCheckboxChange}
                />
                Irritabilidad
              </label>
              <input
                type="text"
                placeholder="Otros (especifique)"
                name="otrosSintomas"
                onChange={handleInputChange}
              />
              <br />
            </div>
            <br />
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={answers.sintomas.length === 0}
            >
              Siguiente
            </button>
          </div>
        </form>
      );
    case 6:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>
              ¿Con qué frecuencia experimentas episodios de ansiedad?
            </label>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  checked={answers.frecuenciaAnsiedad === "Diariamente"}
                  name="frecuenciaAnsiedad"
                  value="Diariamente"
                  onChange={handleInputChange}
                />
                Diariamente
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.frecuenciaAnsiedad === "Semanalmente"}
                  name="frecuenciaAnsiedad"
                  value="Semanalmente"
                  onChange={handleInputChange}
                />
                Semanalmente
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.frecuenciaAnsiedad === "Mensualmente"}
                  name="frecuenciaAnsiedad"
                  value="Mensualmente"
                  onChange={handleInputChange}
                />
                Mensualmente
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.frecuenciaAnsiedad === "Raramente"}
                  name="frecuenciaAnsiedad"
                  value="Raramente"
                  onChange={handleInputChange}
                />
                Raramente
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.frecuenciaAnsiedad === "No estoy seguro"}
                  name="frecuenciaAnsiedad"
                  value="No estoy seguro"
                  onChange={handleInputChange}
                />
                No estoy seguro
              </label>
            </div>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={!answers.frecuenciaAnsiedad}
            >
              Siguiente
            </button>
          </div>
        </form>
      );
    case 7:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>
              ¿Cuál es tu nivel de estrés y ansiedad en este momento?
            </label>
            <div className="checkbox-group">
              {/* Opciones numéricas del 1 al 5 */}
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num}>
                  <input
                    type="radio"
                    checked={answers.nivelEstres === num.toString()}
                    name="nivelEstres"
                    value={num}
                    onChange={handleInputChange}
                  />
                  {num} {num === 5 ? "(Muy alto)" : ""}
                </label>
              ))}
            </div>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={!answers.nivelEstres}
            >
              Siguiente
            </button>
          </div>
        </form>
      );
    case 8:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>
              ¿Tienes alguna condición médica que pueda estar relacionada con la
              ansiedad?
            </label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={answers.condicionesMedicas.includes(
                    "Problemas de tiroides"
                  )}
                  name="condicionesMedicas"
                  value="Problemas de tiroides"
                  onChange={handleCheckboxChange}
                />
                Problemas de tiroides
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.condicionesMedicas.includes(
                    "Enfermedades cardíacas"
                  )}
                  name="condicionesMedicas"
                  value="Enfermedades cardíacas"
                  onChange={handleCheckboxChange}
                />
                Enfermedades cardíacas
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.condicionesMedicas.includes(
                    "Problemas gastrointestinales"
                  )}
                  name="condicionesMedicas"
                  value="Problemas gastrointestinales"
                  onChange={handleCheckboxChange}
                />
                Problemas gastrointestinales
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.condicionesMedicas.includes("Diabetes")}
                  name="condicionesMedicas"
                  value="Diabetes"
                  onChange={handleCheckboxChange}
                />
                Diabetes
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.condicionesMedicas.includes(
                    "Ninguna de las anteriores"
                  )}
                  name="condicionesMedicas"
                  value="Ninguna de las anteriores"
                  onChange={handleCheckboxChange}
                />
                Ninguna de las anteriores
              </label>
            </div>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={answers.condicionesMedicas.length === 0}
            >
              Siguiente
            </button>
          </div>
        </form>
      );
    case 9:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>
              ¿Has probado previamente técnicas de relajación o meditación?
            </label>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  checked={answers.tecnicasRelajacion === "Sí, con éxito"}
                  name="tecnicasRelajacion"
                  value="Sí, con éxito"
                  onChange={handleInputChange}
                />
                Sí, con éxito
              </label>
              <label>
                <input
                  type="radio"
                  checked={answers.tecnicasRelajacion === "Sí, sin éxito"}
                  name="tecnicasRelajacion"
                  value="Sí, sin éxito"
                  onChange={handleInputChange}
                />
                Sí, sin éxito
              </label>
              <label>
                <input
                  type="radio"
                  checked={
                    answers.tecnicasRelajacion === "No, pero me gustaría probar"
                  }
                  name="tecnicasRelajacion"
                  value="No, pero me gustaría probar"
                  onChange={handleInputChange}
                />
                No, pero me gustaría probar
              </label>
              <label>
                <input
                  type="radio"
                  checked={
                    answers.tecnicasRelajacion ===
                    "No, y no estoy interesado en probar"
                  }
                  name="tecnicasRelajacion"
                  value="No, y no estoy interesado en probar"
                  onChange={handleInputChange}
                />
                No, y no estoy interesado en probar
              </label>
            </div>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={!answers.tecnicasRelajacion}
            >
              Siguiente
            </button>
          </div>
        </form>
      );
    case 10:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>
              ¿Estás recibiendo tratamiento para la ansiedad actualmente?
            </label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={answers.tratamientoAnsiedad.includes(
                    "Terapia psicológica"
                  )}
                  name="tratamientoAnsiedad"
                  value="Terapia psicológica"
                  onChange={handleCheckboxChange}
                />
                Terapia psicológica
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.tratamientoAnsiedad.includes("Medicación")}
                  name="tratamientoAnsiedad"
                  value="Medicación"
                  onChange={handleCheckboxChange}
                />
                Medicación
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.tratamientoAnsiedad.includes(
                    "Terapias alternativas (por ejemplo, meditación, yoga)"
                  )}
                  name="tratamientoAnsiedad"
                  value="Terapias alternativas (por ejemplo, meditación, yoga)"
                  onChange={handleCheckboxChange}
                />
                Terapias alternativas (por ejemplo, meditación, yoga)
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.tratamientoAnsiedad.includes(
                    "No estoy recibiendo tratamiento en este momento"
                  )}
                  name="tratamientoAnsiedad"
                  value="No estoy recibiendo tratamiento en este momento"
                  onChange={handleCheckboxChange}
                />
                No estoy recibiendo tratamiento en este momento
              </label>
            </div>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={answers.tratamientoAnsiedad.length === 0}
            >
              Siguiente
            </button>
          </div>
        </form>
      );
    case 11:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>¿Cuáles son tus objetivos con esta aplicación?</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={answers.objetivosApp.includes("Reducir el estrés")}
                  name="objetivosApp"
                  value="Reducir el estrés"
                  onChange={handleCheckboxChange}
                />
                Reducir el estrés
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.objetivosApp.includes(
                    "Mejorar la calidad del sueño"
                  )}
                  name="objetivosApp"
                  value="Mejorar la calidad del sueño"
                  onChange={handleCheckboxChange}
                />
                Mejorar la calidad del sueño
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.objetivosApp.includes(
                    "Aprender técnicas de relajación"
                  )}
                  name="objetivosApp"
                  value="Aprender técnicas de relajación"
                  onChange={handleCheckboxChange}
                />
                Aprender técnicas de relajación
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.objetivosApp.includes(
                    "Obtener información educativa sobre la ansiedad"
                  )}
                  name="objetivosApp"
                  value="Obtener información educativa sobre la ansiedad"
                  onChange={handleCheckboxChange}
                />
                Obtener información educativa sobre la ansiedad
              </label>
              <input
                type="text"
                placeholder="Otro (especifique)"
                name="otrosObjetivos"
                onChange={handleInputChange}
              />
              <br />
            </div>
            <br />
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={answers.objetivosApp.length === 0}
            >
              Siguiente
            </button>
          </div>
        </form>
      );
    case 12:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>
              ¿Tienes alguna preferencia de duración para los ejercicios de
              control de la ansiedad?
            </label>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  checked={
                    answers.preferenciaDuracionEjercicios ===
                    "Cortos (5-10 minutos)"
                  }
                  name="preferenciaDuracionEjercicios"
                  value="Cortos (5-10 minutos)"
                  onChange={handleInputChange}
                />
                Cortos (5-10 minutos)
              </label>
              <label>
                <input
                  type="radio"
                  checked={
                    answers.preferenciaDuracionEjercicios ===
                    "Moderados (15-20 minutos)"
                  }
                  name="preferenciaDuracionEjercicios"
                  value="Moderados (15-20 minutos)"
                  onChange={handleInputChange}
                />
                Moderados (15-20 minutos)
              </label>
              <label>
                <input
                  type="radio"
                  checked={
                    answers.preferenciaDuracionEjercicios ===
                    "Largos (más de 30 minutos)"
                  }
                  name="preferenciaDuracionEjercicios"
                  value="Largos (más de 30 minutos)"
                  onChange={handleInputChange}
                />
                Largos (más de 30 minutos)
              </label>
              <label>
                <input
                  type="radio"
                  checked={
                    answers.preferenciaDuracionEjercicios ===
                    "No tengo preferencia"
                  }
                  name="preferenciaDuracionEjercicios"
                  value="No tengo preferencia"
                  onChange={handleInputChange}
                />
                No tengo preferencia
              </label>
            </div>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={!answers.preferenciaDuracionEjercicios}
            >
              Siguiente
            </button>
          </div>
        </form>
      );
    case 13:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>
              ¿Cuándo prefieres realizar ejercicios o recibir recordatorios para
              controlar la ansiedad?
            </label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={answers.preferenciaTiempoEjercicios.includes(
                    "Mañana"
                  )}
                  name="preferenciaTiempoEjercicios"
                  value="Mañana"
                  onChange={handleCheckboxChange}
                />
                Mañana
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.preferenciaTiempoEjercicios.includes(
                    "Tarde"
                  )}
                  name="preferenciaTiempoEjercicios"
                  value="Tarde"
                  onChange={handleCheckboxChange}
                />
                Tarde
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.preferenciaTiempoEjercicios.includes(
                    "Noche"
                  )}
                  name="preferenciaTiempoEjercicios"
                  value="Noche"
                  onChange={handleCheckboxChange}
                />
                Noche
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.preferenciaTiempoEjercicios.includes(
                    "Días laborables"
                  )}
                  name="preferenciaTiempoEjercicios"
                  value="Días laborables"
                  onChange={handleCheckboxChange}
                />
                Días laborables
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.preferenciaTiempoEjercicios.includes(
                    "Fines de semana"
                  )}
                  name="preferenciaTiempoEjercicios"
                  value="Fines de semana"
                  onChange={handleCheckboxChange}
                />
                Fines de semana
              </label>
            </div>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={answers.preferenciaTiempoEjercicios.length === 0}
            >
              Siguiente
            </button>
          </div>
        </form>
      );

    case 14:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>
              ¿Deseas llevar un registro de tu progreso en la aplicación?
            </label>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  checked={
                    answers.seguimientoProgreso ===
                    "Sí, me gustaría rastrear mi progreso"
                  }
                  name="seguimientoProgreso"
                  value="Sí, me gustaría rastrear mi progreso"
                  onChange={handleInputChange}
                />
                Sí, me gustaría rastrear mi progreso
              </label>
              <label>
                <input
                  type="radio"
                  checked={
                    answers.seguimientoProgreso === "No, no es necesario"
                  }
                  name="seguimientoProgreso"
                  value="No, no es necesario"
                  onChange={handleInputChange}
                />
                No, no es necesario
              </label>
            </div>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={!answers.seguimientoProgreso}
            >
              Siguiente
            </button>
          </div>
        </form>
      );
    case 15:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>
              ¿Te gustaría recibir actualizaciones o recordatorios por correo
              electrónico o mensaje de texto?
            </label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={answers.preferenciaComunicacion.includes(
                    "Correo electrónico"
                  )}
                  name="preferenciaComunicacion"
                  value="Correo electrónico"
                  onChange={handleCheckboxChange}
                />
                Correo electrónico
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.preferenciaComunicacion.includes(
                    "Mensaje de texto"
                  )}
                  name="preferenciaComunicacion"
                  value="Mensaje de texto"
                  onChange={handleCheckboxChange}
                />
                Mensaje de texto
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={answers.preferenciaComunicacion.includes(
                    "No deseo recibir actualizaciones"
                  )}
                  name="preferenciaComunicacion"
                  value="No deseo recibir actualizaciones"
                  onChange={handleCheckboxChange}
                />
                No deseo recibir actualizaciones
              </label>
            </div>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={answers.preferenciaComunicacion.length === 0}
            >
              Enviar
            </button>
          </div>
        </form>
      );
    default:
      return (
        <form className="chatbot-form">
          <div className="form-group">
            <label>Tus respuestas se han guardado</label>
            <button type="button" onClick={prevStep}>
              Anterior
            </button>
            <button type="button" onClick={handleSubmit}>
              Enviar
            </button>
          </div>
        </form>
      );
  }
};

ChatBotForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ChatBotForm;
