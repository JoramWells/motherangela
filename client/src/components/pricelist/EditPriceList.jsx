/* eslint-disable camelcase */
import {
  Button, FormControl, FormLabel, Input, Modal,
  ModalBody, ModalCloseButton, ModalContent, ModalFooter,
  ModalHeader, ModalOverlay, useDisclosure,
} from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editPriceList } from '../../_reducers/priceListSlice';

const EditPriceList = ({ service_name, service_category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [serviceName, setServiceName] = useState(service_name);
  const [serviceCategory, setServiceCategory] = useState(service_category);

  const { id } = useParams();

  const inputValues = {
    id,
    serviceName,
    serviceCategory,
  };

  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={onOpen} leftIcon={<FaEdit />}>
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Price Lists</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Service Name</FormLabel>
              <Input
                placeholder="Service Name"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
              />
            </FormControl>

            {/* service category */}
            <FormControl>
              <FormLabel>Service Category</FormLabel>
              <Input
                placeholder="Service Category"
                value={serviceCategory}
                onChange={(e) => setServiceCategory(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={() => dispatch(editPriceList(inputValues))}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPriceList;

EditPriceList.propTypes = {
  service_name: PropTypes.string,
  service_category: PropTypes.string,
};

EditPriceList.defaultProps = {
  service_name: '',
  service_category: '',
};
