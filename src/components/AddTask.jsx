import { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import "./AddTask.css";

const AddTask = ({ taskToDo, saveTask }) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [formError, setFormError] = useState({ name: "", description: "" });

  const handleAddNewTask = (event) => {
    event.preventDefault();
    if (!formData.name) {
      setFormError({ ...formError, name: "Name is required" });
    } else if (formData.name.length < 4) {
      setFormError({
        ...formError,
        name: "Name must have more than 3 characters",
      });
    } else {
      setFormError({ ...formError, name: "" });
      saveTask([
        {
          name: formData.name,
          description: formData.description,
          state: false,
        },
        ...taskToDo,
      ]);
      setFormData({ name: "", description: "" });
      setOpenModal(false);
    }
  };

  const handleSetNameTask = (event) => {
    if (!event.target.value) {
      setFormError({ ...formError, name: "Name is required" });
    } else if (event.target.value.length < 4) {
      setFormError({
        ...formError,
        name: "Name must have more than 3 characters",
      });
    } else {
      setFormError({ ...formError, name: "" });
    }
    setFormData({ ...formData, name: event.target.value });
  };

  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>+</Button>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name of Task</FormLabel>
              <Input onChange={handleSetNameTask} value={formData.name} />
              {formError.name && <Text color="red">{formError.name}</Text>}
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Description</FormLabel>
              <Input
                onChange={(event) =>
                  setFormData({ ...formData, description: event.target.value })
                }
                value={formData.description}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleAddNewTask}>
              Save
            </Button>
            <Button colorScheme="red" onClick={() => setOpenModal(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

AddTask.propTypes = {
  taskToDo: PropTypes.array,
  saveTask: PropTypes.func,
};

export default AddTask;
