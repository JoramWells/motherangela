/* eslint-disable react/prop-types */
import { Avatar, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserNameAvatar = ({ fullName, link }) => (
  <HStack>
    <Avatar
      size="sm"
      name={fullName}
      color="white"
    />
    <Link to={link}>{fullName}</Link>
  </HStack>
);

UserNameAvatar.propTypes = {
  fullName: PropTypes.string,
  link: PropTypes.string,
};

UserNameAvatar.defaultProps = {
  fullName: '',
  link: '/',
};

export default UserNameAvatar;
