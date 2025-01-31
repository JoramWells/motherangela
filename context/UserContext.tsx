/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import { UserInterface } from 'motherangela';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';

export interface UserContextInterface{
    user?: UserInterface
    setUser?:Dispatch<SetStateAction<UserInterface|undefined>>
}

const initialState: UserContextInterface = {
  user: undefined,
  setUser: () => {},
};

export const UserContext = createContext(initialState);

export function UserProvider({ children }:{children: ReactNode}) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserInterface>();
  const router = useRouter();
  useEffect(() => {
    if (status === 'loading') {
      return;
    }

    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (session !== null) {
      setUser(session?.user as UserInterface);
    }
  }, [session]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
