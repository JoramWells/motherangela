/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */

import {
  Badge,
  Box, Button, HStack, IconButton, Menu, MenuButton, MenuDivider,
  MenuItem, MenuList, Tag, TagRightIcon, Text, VStack,
} from '@chakra-ui/react';
import moment from 'moment/moment';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  FaCheck,
  FaChevronCircleDown, FaEllipsisH, FaFilter, FaPlus,
} from 'react-icons/fa';
import Select from 'react-select';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAppointmentDetailByIDQuery } from '../../api/appointments.api';
import { useGetAllConsultationTypeGroupsQuery } from '../../api/consultation/consultationTypeGroup.api';
import { useGetAllConsultationTypeSubGroupsQuery } from '../../api/consultation/consultationTypeSubGroup.api';

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '38px',
    height: '38px',
    // backgroundColor: 'whitesmoke',
    border: '2px solid whitesmoke',
    paddingBottom: '5px',
    alignItems: 'center',
    display: 'flex',
    borderRadius: '8px',
    width: '150px',
    fontWeight: 'bold',
  }),
  input: (provided) => ({
    ...provided,
  }),
};

const AppointmentsTab = () => {
  const navigate = useNavigate();
  const [clinicType, setClinicType] = useState('');
  const [searchParams] = useSearchParams();

  const { id: appointment_id } = useParams();

  //   get patient_id from search params
  const patient_id = searchParams.get('patient_id');
  const {
    data: appointmentsData,
    isLoading: isLoadingAppointments,
  } = useGetAppointmentDetailByIDQuery(patient_id);
  const { data: clinicData } = useGetAllConsultationTypeSubGroupsQuery();

  const clinicOption = useCallback(() => clinicData?.map((item) => ({
    value: item.consultation_type_sub_group_id, label: item.consultation_type_sub_group_description,
  })), [clinicData]);

  const handleDataUpdate = () => {
    console.log('updated data');
  };

  console.log(appointmentsData);

  const columns = useMemo(
    () => [
      {
        header: 'Appointment Date',
        accessorKey: 'appointment_date',
        cell: (props) => (
          <Text>{moment(props.getValue()).format('LL')}</Text>
        ),

      },
      {
        header: 'Appointment Time',
        accessorKey: 'appointment_time',
        cell: (props) => <Text>{moment(props.getValue(), 'HH:mm').format('hh:mm a')}</Text>,
      },
      {
        header: 'PAYMENT DETAILS',
        accessorKey: 'insurance_detail',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()?.insurance_name}</Text>,

      },
      {
        header: 'Consultation Type',
        enableSorting: false,
        cell: (props) => (
          <Text>
            OPD
          </Text>
        ),

      },
      {
        header: 'Charges',
        accessorKey: 'charges',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Status',
        accessorKey: 'appointment_status',
        cell: (props) => (
          <div>
            {props.getValue() === 'Seen'
              ? (
                <Tag
                  colorScheme="green"
                  // variant="outline"
                  rounded="full"
                >
                  <TagRightIcon
                    as={FaCheck}
                    mr={1}
                    ml={0}
                  />
                  Seen
                </Tag>
              ) : (
                <Tag
                  // colorScheme="orange"
                  // variant="outline"
                  rounded="full"
                >
                  Pending
                </Tag>
              )}
          </div>
        ),
      },
    ],

    [],
  );
  return (
    <VStack
      spacing="0"
      bgColor="white"
      position="relative"
      p={5}
      rounded="lg"
    >
      <HStack
        w="full"
        justify="flex-end"
        position="absolute"
        right={6}
        top={2}
        // padding={2}
      >

        <Menu>
          <MenuButton
            px=".6rem"
              // py={2}
            transition="all 0.2s"
            borderRadius="md"
            as={IconButton}
            size="sm"
            colorScheme="blue"
          >
            <FaFilter />
          </MenuButton>
          <MenuList
            p="5px"
            boxShadow="lg"
            border={0}
          >
            <MenuItem>All</MenuItem>
            <MenuItem>Today</MenuItem>
            <MenuDivider />
            <MenuItem
              color="green.500"
            >
              Paid
            </MenuItem>
            <MenuItem
              color="red.500"
            >
              Unpaid
            </MenuItem>
          </MenuList>
        </Menu>

        <Select
          value={clinicType}
          onChange={(value) => setClinicType(value)}
          styles={selectStyles}
          options={clinicOption()}
          placeholder="Clinic Type"
        />

        <Button
          size="sm"
          height="37px"
          border="2px"
          borderColor="blue.500"
            //   rounded="full"
          backgroundColor="white"
          leftIcon={<FaPlus />}
          color="blue.500"
            // rounded="full"
          _hover={{
            backgroundColor: 'blue.50',
          }}
        >
          Appointment
        </Button>
      </HStack>

      <DataTable2
        title="Appointment History"
        isLoading={isLoadingAppointments}
        columns={columns}
        data={appointmentsData}
        hasSearch={false}
        isTableHeight={false}
      />
    </VStack>
  );
};

export default AppointmentsTab;
