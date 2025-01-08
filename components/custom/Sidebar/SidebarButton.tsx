/* eslint-disable import/prefer-default-export */

'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// import "../../globals.css";

interface SidebarSubButtonProps {
  //   icon: React.ReactNode;
  label: string;
  //   selected: boolean;
  //   onClick: () => {};
  link: string;
}

export function SidebarSubButton({
  //   icon,
  label,
  //   selected,
  //   onClick,
  link,
}: SidebarSubButtonProps) {
  const pathname = usePathname();
  const isActive = useMemo(() => link === pathname, [link, pathname]);
  return (
    <div
      className={`flex h-10 items-center pl-4
    text-slate-500 text-md
    text-md ml-6 rounded-md
    ${isActive && 'bg-sky-50'}
    ${isActive && 'text-sky-500'}
    `}
    >
      <Link href={link} className="text-[12px]">
        {label}
      </Link>
    </div>
  );
}
