/* eslint-disable no-unused-vars */
import {
  Badge,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
// import { useEffect } from "react";
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
// import { getAllItemTypes } from "../../_reducers/itemTypeSlice";

const MedicalSurgicalInfo = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // fetchdata
  // const itemTypeData = useSelector((state) => state.itemType.data);

  // const options = itemTypeData.map((item) => ({
  //   value: item.itemTypeName,
  //   label: item.itemTypeName,
  // }));

  // useEffect(() => {
  //   dispatch(getAllItemTypes());
  // }, [dispatch]);

  const options = [];

  return (
    <VStack spacing={8}>
      <FormControl>

        <FormLabel mt={1}>Surgical Operations History</FormLabel>
        <Input size="lg" placeholder="Select..." />

      </FormControl>

      {/* category */}
      <FormControl>
        <FormLabel>Diabetes</FormLabel>
        <Input size="lg" />
      </FormControl>

      <FormControl>
        <FormLabel>Hypertension</FormLabel>
        <Input
          size="lg"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Blood Transfusion</FormLabel>
        <Input
          size="lg"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Tuberculosis</FormLabel>
        <Input
          size="lg"
        />
      </FormControl>
    </VStack>
  );
};

export default MedicalSurgicalInfo;
