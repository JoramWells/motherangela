/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, IconButton,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { FaChevronRight, FaHome, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const BreadCrumbNav = ({ link, breadCrumbData, addBtn }) => {
  const navigate = useNavigate();
  return (
    <HStack alignItems="center" justifyContent="center" w="full">
      <HStack
        w="100%"
        bgColor="white"
        h={12}
        justifyContent="space-between"
        // rounded="lg"
        borderBottom="1px"
        borderBottomColor="gray.100"
        paddingLeft="15px"
        paddingRight="15px"

        // boxShadow="sm"
      >
        <Breadcrumb separator={(
          <FaChevronRight
            size={10}
            color="gray"
          />
              )}
        >
          <BreadcrumbItem>
            <IconButton
              onClick={() => navigate('/')}
              size="xs"
            >
              <FaHome
                // size={12}
                color="gray"
              />
            </IconButton>
          </BreadcrumbItem>
          {breadCrumbData.map((item) => (
            <BreadcrumbItem
              key={item.id}
              onClick={() => navigate(item.link)}
              isCurrentPage={item.isCurrentPage}
              color="gray"
              // fontSize="12px"
            >
              <BreadcrumbLink
                fontSize="12px"
                color={item.isCurrentPage && 'blue.500'}
                bgColor={item.isCurrentPage && 'blue.50'}
                p={1}
                rounded="lg"
              >
                {item.title}

              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}

        </Breadcrumb>
        {addBtn && (
        <Button
          colorScheme="green"
          size="sm"
          // p={1}
          // boxShadow="lg"
          fontSize="12px"
          onClick={() => navigate(link)}
          // variant="link"
          h={7}
          p={3}
          pt=".8rem"
          alignItems="center"
          display="flex"
//           leftIcon={(
//             <FaPlus
//               size={10}
//             />
// )}
        >
          ADD

        </Button>
        )}
      </HStack>
    </HStack>
  );
};

export default BreadCrumbNav;

BreadCrumbNav.propTypes = {
  link: PropTypes.string,
  breadCrumbData: PropTypes.array,
  addBtn: PropTypes.bool,
};

BreadCrumbNav.defaultProps = {
  link: '/add-pharmaceuticals',
  addBtn: true,
  breadCrumbData: [
    {
      id: nanoid(),
      title: 'Stores',
      link: '/stores',
    },
    {
      id: nanoid(),
      title: 'Pharmaceuticals',
      link: '/pharmaceuticals',
      isCurrentPage: true,
    },
  ],
};
