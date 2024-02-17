/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import { Box, Flex, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import MainNav from '../Navbar/MainNav';
import Sidebar from '../Sidebar';

function Index({ children, display }) {
  return (
    <div hidden={display}>
      <Flex>
        {/* sidebar */}
        <Sidebar />
        <MainNav />

        {/* container */}
        <Box w={{ base: '100%', sm: 'calc(100%-240px)' }}>
          <VStack
            alignItems="center"
            justifyContent="center"
            w="calc(100%-200px)"
            ml="230px"
          >
            {children}
          </VStack>
        </Box>
      </Flex>
    </div>
  );
}

Index.propTypes = {
  children: PropTypes.node,
  display: PropTypes.bool,
};

Index.defaultProps = {
  display: true,
};

export default Index;
