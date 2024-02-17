import { Button, HStack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';

const SidebarItemButton = ({
  icon, text, selected, onClick,
}) => (
  (
    <HStack
      justifyContent="flex-start"
      // fontWeight={selected && 'bold'}
      borderLeft={selected && '4px'}
      color={selected ? 'white' : 'gray.400'}
      bgGradient={selected && 'linear(to-r, blue.600, blue.900)'}
      boxShadow={selected && 'sm'}
      rounded="sm"
      as={Button}
      w="full"
      variant="ghost"
      // boxShadow="lg"
      pl={2}
      // mt={1}
      _hover={{
        cursor: 'pointer',
        bgColor: 'blue.800',
        color: selected ? 'white' : 'gray.50',
        // boxShadow: 'xs',
      }}
      onClick={onClick}
      alignItems="center"
    >
      {icon}
      <Text
        display={{ sm: 'none', md: 'block' }}
        textTransform="capitalize"
        // fontSize={{
        //   sm: '14px', md: '12px', lg: 'md', xl: 'md',
        // }}
        fontSize="14px"
        // fontWeight="semibold"
      >
        {text}

      </Text>
    </HStack>
  )
);

SidebarItemButton.propTypes = {
  icon: PropTypes.node,
  selected: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarItemButton.defaultProps = {
  icon: <FaUser />,
  selected: false,
  text: 'Dashboard',
  onClick: () => {},
};

export default SidebarItemButton;
