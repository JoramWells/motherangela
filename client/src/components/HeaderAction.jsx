/* eslint-disable react/forbid-prop-types */
import { Button, HStack, Text } from '@chakra-ui/react';
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import PropTypes from 'prop-types';

const HeaderAction = ({ text, subrowData }) => (
  <HStack
    w="100%"
    justifyContent="space-between"
    bgColor="white"
    p={3}
    rounded="lg"
    mt={2}
  >
    <Text fontSize="xl" fontWeight="bold">
      {text}
      <span style={{
        fontSize: '18px',
        // fontWeight: 'normal',
        color: 'gray',
      }}
      >
        {' '}
        (
        {subrowData.length}
        )

      </span>
    </Text>
    <HStack>
      <Button leftIcon={<FaPrint />}>Print Report</Button>

      <Button leftIcon={<FaFileDownload />}>Download</Button>

    </HStack>
  </HStack>
);

export default HeaderAction;

HeaderAction.propTypes = {
  subrowData: PropTypes.array,
  text: PropTypes.string,
};

HeaderAction.defaultProps = {
  subrowData: [],
  text: 'Users',
};
