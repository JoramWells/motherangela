'use client';

import React, {
  use, useCallback, useMemo, useState,
} from 'react';
import { Loader2 } from 'lucide-react';
import { useGetUserQuery, useUpdateUserPasswordMutation } from '@/api/users/users.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import InputText from '@/components/custom/forms/InputText';
import { Button } from '@/components/ui/button';

function EditUserPage({ params }:{params:Promise<{id:string}>}) {
  const { id } = use(params);
  const { data: userData } = useGetUserQuery(id, { skip: !id });
  const {
    full_name,
  } = userData || {};
  console.log(userData);
  const listItems = useMemo(() => [
    {
      id: '1',
      label: 'home',
      link: '/',
    },
    {
      id: '2',
      label: 'Users',
      link: '',
    },
    {
      id: '3',
      label: full_name!,
      link: '',
    },
    {
      id: '4',
      label: 'Edit',
      link: '',
    },
  ], [full_name]);
  const [password, setPassword] = useState('');
  const [updateUserPassword, { isLoading }] = useUpdateUserPasswordMutation();

  const inputValues = useMemo(() => [
    {
      id,
      password,
    },
  ], [id, password]);

  const handleSave = useCallback(() => updateUserPassword(inputValues[0]), [inputValues[0]]);

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2"
      >
        <div
          className="w-1/2 bg-white p-4 flex flex-col space-y-2"
        >
          <InputText
            label="Enter password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <div>
            <Button
              size="sm"
              className="bg-sky-600 hover:bg-sky-700 shadow-none"
              onClick={() => handleSave()}
              disabled={isLoading}
            >
              {isLoading && <Loader2 size={16} className="mr-2 animate-spin" />}
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUserPage;
