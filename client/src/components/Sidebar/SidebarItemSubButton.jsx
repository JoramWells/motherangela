import { HStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SidebarItemSubButton = ({
  icon, text, selected, onClick, subButtonLink,
}) => (
  (
    <HStack
      justifyContent="flex-start"
      color={selected ? 'white' : 'gray.500'}
      // fontWeight={selected && 'semibold'}
      bgColor={selected && 'blue.800'}
      p={2}
      pl={10}
      _hover={{
        cursor: 'pointer',
        color: selected ? 'gray.400' : 'gray.300',
        boxShadow: 'xs',
      }}
      onClick={onClick}
      alignItems="center"
    >
      {icon}
      <Link
        to={subButtonLink}
        style={{
          fontSize: '12px',
        }}

      >
        {text}

      </Link>
    </HStack>
  )
);

SidebarItemSubButton.propTypes = {
  icon: PropTypes.node,
  selected: PropTypes.bool,
  text: PropTypes.string,
  subButtonLink: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarItemSubButton.defaultProps = {
  icon: <div />,
  selected: false,
  text: '',
  subButtonLink: '',
  onClick: () => {},
};

export default SidebarItemSubButton;
