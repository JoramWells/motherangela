import {
  Box, HStack, VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BreadCrumbNav from '../components/BreadCrumbNav';
import { getAllGroupPrivileges } from '../_reducers/groupPrivilegesSlice';
import GroupPrivilegesTable from '../components/tables/GroupPrivilegesTable';

const columns = [
  {
    Header: 'Full Name',
    accessor: 'fullName',
  },
  {
    Header: 'View Waiting Patient',
    accessor: 'viewWaitingPatient',
  },
  {
    Header: 'View Patients Seen On Selected Period',
    accessor: 'viewPatientsSeenOnSelectedPeriod',
  },
  {
    Header: 'Register Patient',
    accessor: 'registerPatient',
  },
  {
    Header: 'Register In Patient',
    accessor: 'registerInPatient',
  }, {
    Header: 'View Patients',
    accessor: 'viewPatients',
  },
  {
    Header: 'View Admitted Patients',
    accessor: 'viewAdmittedPatients',
  }, {
    Header: 'View Appointments',
    accessor: 'viewAppointments',
  },
//   {
//     Header: 'View Patient Charges',
//     accessor: 'viewPatientCharges',
//   },
//   {
//     Header: 'Reconcile Patient Personal Charges',
//     accessor: 'reconcilePersonalChargesPayments',
//   },
];

const GroupPrivileges = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.groupPrivileges);
  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  useEffect(() => {
    dispatch(getAllGroupPrivileges());
  }, [dispatch]);
  return (
    <VStack mt={10} w="full">

      <BreadCrumbNav link="/admin-add-department" />
      <HStack
        mt={5}
        w="100%"
        justifyContent="flex-end"
        p={3}
      />
      <Box w="98%" border="1px" borderColor="gray.100" rounded="lg">
        <GroupPrivilegesTable data={subrowData} columns={columns} />
      </Box>
    </VStack>
  );
};

export default GroupPrivileges;
