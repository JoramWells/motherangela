import React, { Fragment } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export interface BreadCrumbInterface{
    listItems: Array<{
    id: string
    label: string
    link: string
  }>
}

export default function BreadcrumbNav({ listItems }:BreadCrumbInterface) {
  return (
    <Breadcrumb
      className="bg-white p-3 border-b border-slate-200 "
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
  );
}
