import React, { Fragment } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useUserContext } from '@/context/UserContext';
import UserAccount from '../user/UserAccount';

export interface BreadCrumbInterface{
    listItems: Array<{
    id: string
    label: string
    link: string
  }>
}

export default function BreadcrumbNav({ listItems }:BreadCrumbInterface) {
  const { user } = useUserContext();
  return (
    <div
      className="flex justify-between items-center bg-white p-1.5 border-b sticky top-0"
    >
      <Breadcrumb
        className=""
      >
        <BreadcrumbList className="text-[12px]">
          {listItems && listItems.map((item, index) => (
            <Fragment key={item.id}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={item.link}
                  className={`capitalize text-[12px] ${
                    index === listItems.length - 1 && 'text-cyan-500'
                  } `}
                >
                  {item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index !== listItems.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <UserAccount
        user={user!}
      />
    </div>
  );
}
