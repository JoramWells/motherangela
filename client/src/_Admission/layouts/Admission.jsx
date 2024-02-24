/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Text, VStack, Tag, Menu, MenuButton, MenuList, MenuItem, IconButton, Avatar,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaEllipsisH, FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllAdmissionsQuery } from '../../api/admissions.api';
import UserNameAvatar from '../../components/UserNameAvatar';

const Admission = () => {
  const navigate = useNavigate();

  const {
    data, isLoading,
  } = useGetAllAdmissionsQuery();

  console.log(data);

  const columns = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'patient_detail',
        cell: (props) => (
          <VStack
            alignItems="flex-start"
            spacing={0}
          >
            <HStack
              alignItems="flex-start"
              spacing={2}
            >
              <Avatar
                rounded="full"
                fontWeight="bold"
                color="white"
                size="sm"
                name={props.getValue() ? `${props.getValue()?.first_name
                } ${props.getValue()?.middle_name}` : '0'}
              />
              <VStack
                // ml={10}
                alignItems="flex-start"
                spacing=".3rem"
              >
                <Text
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  {props.getValue() ? `${props.getValue()?.first_name
                  } ${props.getValue()?.middle_name}` : '0'}
                </Text>
                <Text
                  color="gray.500"
                >
                  {moment(props.getValue()?.dob).format('ll')}
                </Text>
                <Text
                  color="gray.500"
                >
                  {props.getValue()?.patient_gender === 0 ? 'MALE' : 'FEMALE'}
                </Text>
              </VStack>
            </HStack>

          </VStack>
        ),

      },
      {
        header: 'Admission Date',
        accessorKey: 'admission_date',
        enableSorting: false,
        cell: (props) => (
          <VStack
            alignItems="left"
          >
            <Text>{moment(new Date(props.getValue())).format('ll')}</Text>
            <Text
              color="gray.500"
            >
              {moment(props.row.original.admission_time, 'HH:mm').format('hh:mm a')}
            </Text>
          </VStack>
        ),

      },
      {
        header: 'Payment Details',
        accessorKey: 'pay_status',
        enableSorting: false,
        cell: (props) => (
          <Box>
            {props.getValue() === 1 ? (
              <Tag
                colorScheme="green"
                variant="subtle"
                rounded="full"
                // border="1px"
                size="sm"
              >
                PAID
              </Tag>
            ) : (
              <Tag
                rounded="full"
                size="sm"
                colorScheme="red"
                variant="subtle"
              >
                NOT PAID
              </Tag>
            )}
          </Box>
        ),

      },
      {
        header: 'Ward',
        accessorKey: 'ward',
        cell: (props) => <Text>{props.getValue()?.ward_description}</Text>,
      },
      {
        header: 'Bed Number',
        accessorKey: 'ward_bed',
        enableSorting: false,
        cell: (props) => (
          <VStack
            color="white"
            rounded="lg"
            fontWeight="extrabold"
            h={7}
            w={7}
            justifyContent="center"
            border="2px"
            borderColor="gray.200"
            bgColor="gray.500"
          >
            <Text>{props.getValue()?.bed_number}</Text>
          </VStack>
        ),

      },
      {
        header: 'Action',
        cell: (props) => (
          <Menu size="lg">
            <MenuButton
              colorScheme="gray"
              variant="ghost"
              color="gray"
              pr=".6rem"
              as={IconButton}
              size="sm"
              rightIcon={<FaEllipsisH />}
            />
            <MenuList
              boxShadow="lg"
            >
              <MenuItem
                onClick={() => navigate(`/admission-profile/${props.row.original.admission_id}`)}
              >
                Admission Profile

              </MenuItem>
              <MenuItem>Interim Inpatient Bill</MenuItem>
              <MenuItem>Discharge Patient</MenuItem>
              <MenuItem>Transfer/Admit</MenuItem>
            </MenuList>
          </Menu>
        ),
      },
    ],

    [navigate],
  );

  const subRowData = data
    && data.map((item) => ({
      ...item,
      subRows: [],
    }));

  // if (isLoading) return <div>loading..</div>;

  return (
    <VStack
      mt="50px"
      w="full"
      bgColor="gray.50"
      p={3}
      position="relative"
    >
      <BreadCrumbNav link="/add-admission" />

      <Box
        w="100%"
        bgColor="white"
        p={3}
        h="89%"
      >
        <DataTable2
          title="Patient Admission"
          searchQueryColumn="pay_status"
          data={subRowData}
          columns={columns}
        />
      </Box>
    </VStack>
  );
};

export default Admission;
