/* eslint-disable no-unused-vars */
import {
  Button, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import CustomInput from '../../components/Forms/CustomInput';
import { useAddAccountingAssetLocationMutation, useGetAccountingAssetLocationQuery, useUpdateAccountingAssetLocationMutation } from '../../api/accounts/accounting_assets/accountingAssetLocation.api';

const AddAssetLocation = () => {
  const [locationDescription, setLocationDescription] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useGetAccountingAssetLocationQuery(id);

  const [addAccountingAssetLocation,
    { isLoading, data: assetLocationData }] = useAddAccountingAssetLocationMutation();

  const [updateAccountingAssetLocation,
    {
      isLoading: isUpdateAssetLocation,
      data: updateAssetLocationData,
    }] = useUpdateAccountingAssetLocationMutation();

  const inputValues = {
    asset_location_description: locationDescription,
  };

  const updateInputValues = {
    id,
    asset_location_description: locationDescription,
  };

  useEffect(() => {
    if (data) {
      setLocationDescription(data.asset_location_description);
    }
  }, [data]);

  useEffect(() => {
    if (assetLocationData) {
      navigate(-1);
    }
    if (updateAssetLocationData) {
      navigate(-1);
    }
  }, [assetLocationData, navigate, updateAssetLocationData]);
  console.log(data);

  return (
    <VStack
      w="full"
      mt="50px"
      p={3}
    >
      <BreadCrumbNav
        addBtn={false}
      />

      <VStack
        w="40%"
        bgColor="white"
        rounded="lg"
        p={3}
        spacing={6}
      >
        <HStack w="full" justifyContent="space-between">
          <IconButton
            size="sm"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </IconButton>
          <Text
            fontSize="18px"
            fontWeight="semibold"
          >
            Asset Category
          </Text>
        </HStack>

        <CustomInput
          label="Asset Description"
          value={locationDescription}
          onChange={setLocationDescription}
        />

        {id && id !== 'null'
          ? (
            <HStack
              w="full"
              justify="flex-end"
            >
              <Button
                variant="outline"
                size="sm"
              >
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                size="sm"
                isLoading={isUpdateAssetLocation}
                onClick={() => updateAccountingAssetLocation(updateInputValues)}
              >
                Update
              </Button>
            </HStack>
          )
          : (
            <Button
              colorScheme="blue"
              w="full"
              isLoading={isLoading}
              onClick={() => addAccountingAssetLocation(inputValues)}
            >
              Save
            </Button>
          )}

      </VStack>
    </VStack>
  );
};

export default AddAssetLocation;
