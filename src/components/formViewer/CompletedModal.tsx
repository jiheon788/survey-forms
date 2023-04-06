import {
  Button,
  FormControl,
  FormLabel,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import FormSelector from './FormSelector';

interface ICompletedModalProps {
  isOpen: boolean;
  onClose: () => void;
  forms: {
    id: string;
    questionBody: string;
    answerType: string;
    isMandatory: boolean;
    options: {
      id: string;
      value: string;
    }[];
  }[];
  register: UseFormRegister<FieldValues>;
}

const CompletedModal = ({ forms, isOpen, onClose, register }: ICompletedModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>응답이 기록되었습니다.</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap={5} flexDirection="column" w="100%">
            {forms.map((formData) => (
              <FormControl isRequired={formData.isMandatory} key={formData.id}>
                <FormLabel htmlFor={formData.questionBody}>{formData.questionBody}</FormLabel>
                <FormSelector register={register} formData={formData} isResult={true} />
              </FormControl>
            ))}
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CompletedModal;
