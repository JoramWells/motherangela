/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */

import {
  Box, Button, HStack, IconButton, Menu, MenuButton, MenuDivider,
  MenuItem, MenuList, Tag, Text, VStack,
} from '@chakra-ui/react';
import moment from 'moment/moment';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
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

const AdmissionTab = () => {
  const navigate = useNavigate();
  const [clinicType, setClinicType] = useState('');
  const [searchParams] = useSearchParams();

  const { id: appointment_id } = useParams();

  //   get patient_id from search params
  const patient_id = searchParams.get('patient_id');
  const { data: appointmentsData } = useGetAppointmentDetailByIDQuery(patient_id);
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
                  Seen
                </Tag>
              ) : (
                <Tag
                  colorScheme="orange"
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
    >
      <HStack
        w="full"
        justify="flex-end"
        // padding={2}
      >

        <HStack>
          <Menu>
            <MenuButton
              px=".6rem"
              // py={2}
              transition="all 0.2s"
              borderRadius="md"
              as={IconButton}
              size="sm"
              colorScheme="blue"
              // rounded="full"
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
            onClick={() => navigate(
              {
                pathname: `/add-admission/${patient_id}`,
                search: `?appointment_id=${appointment_id}`,
              },
            )}
            _hover={{
              backgroundColor: 'blue.50',
            }}
          >
            Admission
          </Button>
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
      </HStack>

      <DataTable2
        columns={columns}
        data={appointmentsData}
        hasSearch={false}
        isTableHeight={false}
      />
    </VStack>
  );
};

export default AdmissionTab;
