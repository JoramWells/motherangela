'use client';

import Image from 'next/image';
import React from 'react';
import UserAccount from '../user/UserAccount';
import { useUserContext } from '@/context/UserContext';

function Navbar() {
  const { user } = useUserContext();

  return (
    <div
      className="p-1 pl-2 pr-2 border-b flex justify-between items-center"
    >
      <div
        className="flex items-center space-x-2"
      >
        <Image
          src="/assets/img/logo.webp"
          className="rounded-lg"
          alt="img"
          width={35}
          height={35}
          style={{
            width: '35px',
            height: '35px',
            objectFit: 'cover',
          }}
        />
        <p
          className="text-[16px] font-semibold"
        >
          ADGL
        </p>
      </div>
      <UserAccount user={user!} />
    </div>
  );
}

export default Navbar;
