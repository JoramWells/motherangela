/* eslint-disable no-unused-vars */
import {
  Button, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useAddAccountingAssetCategoryMutation, useGetAccountingAssetCategoryQuery, useUpdateAccountingAssetCategoryMutation } from '../../api/accounts/accounting_assets/accountingAssetCategory.api';
import CustomInput from '../../components/Forms/CustomInput';

const AddAssetCategory = () => {
  const [categoryDescription, setCategoryDescription] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useGetAccountingAssetCategoryQuery(id);

  const [addAccountingAssetCategory,
    { isLoading, data: assetCategoryData }] = useAddAccountingAssetCategoryMutation();

  const [updateAccountingAssetCategory,
    {
      isLoading: isUpdateAssetCategory,
      data: updateAssetCategoryData,
    }] = useUpdateAccountingAssetCategoryMutation();

  const inputValues = {
    asset_category_description: categoryDescription,
  };

  const updateInputValues = {
    id,
    asset_category_description: categoryDescription,
  };

  useEffect(() => {
    if (data) {
      setCategoryDescription(data.asset_category_description);
    }
  }, [data]);

  useEffect(() => {
    if (assetCategoryData) {
      navigate(-1);
    }
    if (updateAssetCategoryData) {
      navigate(-1);
    }
  }, [assetCategoryData, navigate, updateAssetCategoryData]);
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
          value={categoryDescription}
          onChange={setCategoryDescription}
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
                isLoading={isUpdateAssetCategory}
                onClick={() => updateAccountingAssetCategory(updateInputValues)}
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
              onClick={() => addAccountingAssetCategory(inputValues)}
            >
              Save
            </Button>
          )}

      </VStack>
    </VStack>
  );
};

export default AddAssetCategory;
