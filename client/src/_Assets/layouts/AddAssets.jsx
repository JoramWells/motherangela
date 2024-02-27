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
import CustomSelect from '../../components/Forms/CustomSelect';

const AddAssets = () => {
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
        w="50%"
        bgColor="white"
        rounded="lg"
        p={5}
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

        <CustomSelect
          label="Branch"
        />

        <CustomInput
          label="Serial Number"
        />

        <VStack
          w="full"
          alignItems="flex-start"
          spacing={4}
        >
          <VStack
            w="full"
            alignItems="flex-start"
            spacing={0}
          >
            <Text
              fontWeight="bold"
              fontSize="18px"
            >
              Asset Details
            </Text>
            <Text
              fontSize="14px"
              color="gray.500"
            >
              Provide a concise name and description of the asset.
            </Text>
          </VStack>
          <CustomInput
            label="Description"
            value={locationDescription}
            onChange={setLocationDescription}
          />
          <HStack
            w="full"
          >
            <CustomSelect
              label="Category"
            />

            <CustomSelect
              label="Location"
            />
          </HStack>
        </VStack>

        {/* value */}
        <VStack
          w="full"
          alignItems="flex-start"
          spacing={4}
        >

          <Text
            fontWeight="bold"
            fontSize="18px"
          >
            Value and Depreciation
          </Text>

          <VStack
            w="full"
            alignItems="flex-start"
            spacing={0}
          >

            <Text
              fontSize="16px"
              fontWeight="bold"
            >
              Acquisition Cost
            </Text>
            <CustomInput
              label="Fair Market Value of the Asset at time of acquisition."
            />
          </VStack>

          {/* depr */}
          <VStack
            w="full"
            alignItems="flex-start"
            spacing={0}
          >

            <Text
              fontSize="16px"
              fontWeight="bold"
            >
              Accumulated Depreciation
            </Text>
            <CustomInput
              label="The total amount of depreciation expense recognized since the asset was acquired."
            />
          </VStack>

          {/* net bkr */}
          <VStack
            w="full"
            alignItems="flex-start"
            spacing={0}
          >

            <Text
              fontSize="16px"
              fontWeight="bold"
            >
              Net Book Value
            </Text>
            <CustomInput
              label="This represents the remaining value of the asset that has not yet been depreciated."
            />
          </VStack>
        </VStack>

        <CustomInput
          label="Quantity"
        />

        <CustomInput
          label="Tag Number"
        />

        <CustomInput
          label="Condition"
        />

        <CustomSelect
          label="Status"
        />

        <CustomInput
          label="Vendor Name"
        />

        <CustomInput
          label="Inventory No."
        />

        <CustomInput
          label="Donor Name"
        />

        <CustomInput
          type="date"
          label="Date of Purchase"
        />

        <CustomInput
          label="Voucher No."
        />

        <CustomInput
          label="Title"
        />

        <CustomInput
          label="Condition"
        />

        <CustomInput
          type="date"
          label="Date of Last Physical Check"
        />

        <CustomInput
          type="date"
          label="Disposition/Transfer Date"
        />

        <CustomInput
          label="Market value at Time of Disposition"
        />

        <CustomInput
          label="Method use to determine market value"
        />

        <CustomSelect
          label="Property Transfer Memo Complete for donated/ transferred Items"
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

export default AddAssets;
