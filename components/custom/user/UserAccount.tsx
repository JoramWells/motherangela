'use client';

import { ChevronDownIcon, UserCircle } from 'lucide-react';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { UserInterface } from 'motherangela';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function UserAccount({ user }: { user: UserInterface }) {
  // const { data: session } = useSession()
  const router = useRouter();
  const logOut = async () => {
    await signOut();
    router.push('/login');
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto shadow-none" size="sm">
          <UserCircle className="" size={18} />
          {user?.user_name}
          <ChevronDownIcon className="h-4 w-4 text-zinc-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="capitalize">
          <span>
            {user?.full_name}
          </span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="capitalize">Your Profile</DropdownMenuItem>

        <DropdownMenuSeparator />

        {/*  */}
        <DropdownMenuItem className="capitalize" onClick={async () => { await logOut(); }}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
