/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import {
  Avatar, Box, Button, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack,
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import {
  FaPlus,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useGetMaternityProfileQuery } from '../../api/maternity.api';
import DataTable2 from '../../components/tables/DataTable';

const CustomButton = ({ text, link }) => {
  const [step, setStep] = useState(0);
  return (
    <HStack w="full" justifyContent="flex-end">
      <Box
        border="4px"
        padding={1}
        rounded="full"
        borderColor="blue.500"
      >
        <Button
          colorScheme="blue"
          rounded="full"
          leftIcon={<FaPlus />}
        >
          <Link to={link}>{text}</Link>

        </Button>

      </Box>
    </HStack>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

CustomButton.defaultProps = {
  text: '',
  link: '/maternity-profile',
};

const MaternityProfileDetail = () => {
  const { id } = useParams();
  // const { data, loading } = useSelector((state) => state.patients);
  const { data, isLoading } = useGetMaternityProfileQuery(id);

  const columns = useMemo(
    () => [
      {
        header: 'Age',
        accessorKey: 'medication_name',
        cell: (props) => <Text>{props.getValue().substring(0, 30)}</Text>,
        width: 50,

      },

      {
        header: 'Drug',
        accessorKey: 'medication_category',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()?.category_name}</Text>,

      },
      {
        header: 'Dosage',
        accessorKey: 'price',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },

      {
        header: 'Date',
        accessorKey: 'price_corporate',
        cell: (props) => <Text>{props.getValue()}</Text>,
        size: 200,

      },
    ],

    [],
  );

  return (
    <VStack
      h="100vh"
      w="full"
      mt="55px"
      bgColor="gray.50"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      <Text>{data?.name_of_client}</Text>

      <Box w="full" bgColor="white">
        <Tabs isFitted>
          <TabList>
            {/* <Tab>Allergies</Tab>
            <Tab>Antenatal</Tab> */}
            <Tab>Clinical Notes</Tab>
            <Tab>Delivery</Tab>
            <Tab>Deworming</Tab>
            <Tab>Impairments</Tab>
            <Tab>Immunizations</Tab>
            <Tab>Infant Feeding</Tab>
            {/* <Tab>Lab Req.</Tab> */}
            <Tab>Patient Notes</Tab>
            <Tab>Physical exam.</Tab>
            <Tab>Post Natal</Tab>
            {/* <Tab>Procedures</Tab> */}
            <Tab>Preventive Services</Tab>
            {/* <Tab>Radiology Req.</Tab> */}
            <Tab>Vitamin A Capsules</Tab>
            <Tab>Visits</Tab>
            {/* <Tab>Vital Signs</Tab> */}

          </TabList>

          <TabPanels>
            <TabPanel>
              <CustomButton text="New Clinical Notes" />
            </TabPanel>
            <TabPanel>
              <CustomButton text="New Delivery Details" link={`/add-maternity-delivery-details/${id}`} />

            </TabPanel>
            <TabPanel>
              <CustomButton text="Deworming Detail" link={`/add-maternity-deworming-details/${id}`} />
              <DataTable2 columns={columns} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </VStack>
  );
};

export default MaternityProfileDetail;
