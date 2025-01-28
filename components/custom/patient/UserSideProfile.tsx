import { Link } from 'lucide-react';
import { UserInterface } from 'motherangela';
import Image from 'next/image';
import React from 'react';

type SelectedPatientData = Pick<
  UserInterface,
  'email' | 'full_name' | 'user_type'
>;

function UserSideProfile({
  email, full_name, user_type,

}: SelectedPatientData) {
  return (
    <div className="w-1/5 bg-white p-4 rounded-lg flex flex-col items-center space-y-2">
      <Image
        src="/assets/img/profile.png"
        alt="profile"
        width={50}
        height={50}
        className="rounded-full"
        style={{
          width: '50px',
          height: '50px',
          objectFit: 'contain',
        }}
      />

      <div className="flex flex-col items-center justify-center w-full">
        {full_name

          ? (
            <div className="flex flex-col items-center justify-center space-y-1">
              <p
                className="text-[14px] text-zinc-700"
              >
                {`${full_name}`}
              </p>

              <div className="flex flex-row justify-between text-[12px] space-x-2 text-zinc-500">
                <p>Email :</p>
                <p>{email}</p>
              </div>

              <div className="flex flex-row justify-between text-[12px] text-zinc-500">
                <p>
                  User Type:
                  {' '}
                </p>
                <p>{user_type?.user_type_desc}</p>
              </div>

            </div>
          )
          : (
            <Link
              href="/"
              className="text-[12px] text-sky-600 underline hover:text-sky-700 "
            >
              Update User profile
            </Link>
          )}
      </div>
    </div>
  );
}

export default UserSideProfile;
