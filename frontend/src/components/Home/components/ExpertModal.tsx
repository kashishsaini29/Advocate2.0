import React from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import { Form } from './Form';

const ExpertModal = ({ isOpen, onClose }:{isOpen:any, onClose:any}) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody>
       
          <Form/>
        </ModalBody>

       
      </ModalContent>
     
    </Modal>
  );
};

export default ExpertModal;
