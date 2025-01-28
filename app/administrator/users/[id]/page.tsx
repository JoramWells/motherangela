'use client';

import React, { use, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetUserQuery } from '@/api/users/users.api';
import UserSideProfile from '@/components/custom/patient/UserSideProfile';
import { Button } from '@/components/ui/button';

function UserDetailPage({ params }:{params:Promise<{id:string}>}) {
  const { id } = use(params);
  const { data: userData } = useGetUserQuery(id, { skip: !id });
  const {
    user_id, user_type, full_name, email,
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
  ], [full_name]);
  const router = useRouter();
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2 flex items-start space-x-2"
      >
        <UserSideProfile
          email={email!}
          full_name={full_name!}
          user_type={user_type}
        />
        <div className="h-[50vh] border-l" />
        <div
          className="flex-1"
        >
          <div>
            <Button
              size="sm"
              onClick={() => router.push(`/administrator/users/${user_id}/edit`)}
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailPage;
