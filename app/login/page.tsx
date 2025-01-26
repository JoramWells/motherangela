'use client';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import {
  type FormEvent, useCallback, useEffect, useState,
} from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import InputText from '@/app/_components/forms/InputText'
// import CustomSelect from '../_components/forms/CustomSelect'
// import { useGetAllHospitalsQuery } from '@/api/hospital/hospital.api'
import { useGetAllHospitalsQuery } from '@/api/hospital/hospital.api';
import InputSelect from '@/components/custom/forms/InputSelect';
import InputText from '@/components/custom/forms/InputText';
import FormError from '@/components/custom/login/FormError';
// import { getServerSession } from 'next-auth'

function LoginPage() {
  const { data: session, status } = useSession();

  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [hospitalID, setHospitalID] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hospitalID) {
      setIsLoading(true);
      const response = await signIn('credentials', {
        firstName,
        password,
        hospitalID,
        redirect: false,
      });
      setIsLoading(false);

      // if(response?.error){
      //   setError(response.error)
      // }
      if (response?.error === null) {
        router.push('/');
        router.refresh();
      } else {
        setError(response?.error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (status === 'loading') {
      return;
    }

    if (session) {
      // setTimeout(() => {
      //   router.push('/login')
      // }, 2000)
      setIsLoading(false);
      router.push('/');
    }
  }, [router, session, status]);

  const { data: hospitalsData } = useGetAllHospitalsQuery();

  const hospitalOptions = useCallback(() => hospitalsData?.map((item: any) => ({
    id: item?.id,
    label: item?.hospitalName,
  })), [hospitalsData]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-slate-50">
      <div className="mb-4">
        <Image
          src="/img/logo1.svg"
          alt="img"
          width={60}
          height={60}
          style={{ width: '60px', height: 'auto' }}
          // quality={100}
        />
      </div>

      <form
        className="flex flex-col w-1/4 p-4
        relative
        rounded-lg gap-y-2 mx-auto ml-auto bg-white border-t-4 border-t-teal-500
        border border-slate-100
        "
        onSubmit={handleSubmit}
      >
        {/* <Image
          src={'/img/xmas.png'}
          alt="img"
          width={90}
          height={90}
          className='absolute -top-9 -right-8'
          style={{ width: '90px', height: '90px' }}
          objectFit='contain'
          // quality={100}
        /> */}
        <div>
          <h2 className="text-slate-700 text-[16px]">Sign In</h2>
          <h3 className="text-muted-foreground text-[12px] ">
            Login to your Account.
          </h3>
        </div>
        {/* {} */}
        {/* <CustomSelect
          label="Select Hospital"
          data={hospitalOptions()}
          value={hospitalName}
          onChange={setHospitalName}
        /> */}
        <InputText
          label="Username"
          value={firstName}
          onChange={setFirstName}
          placeholder="Enter username"
        />
        <InputText
          label="Password"
          value={password}
          onChange={setPassword}
          placeholder="Enter password"
          type="password"
        />
        <InputSelect
          label="Hospital name"
          onChange={setHospitalID}
          value={hospitalID as string}
          placeholder="Select hospital"
          data={hospitalOptions() ?? []}
        />
        {error && <FormError message={error} setError={setError} />}
        <Button
          size="sm"
          className="bg-teal-600 text-[14px] mt-2 hover:bg-teal-700 font-semibold shadow-none"
          // onClick={() => handleSubmit()}
          type="submit"
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="animate-spin mr-2" size={16} />}
          Sign In
        </Button>
        <div className="flex flex-col space-y-2">
          {/* <Link
            href={'/auth/register'}
            className="text-center text-[12px] text-slate-500"
          >
            Don&apos;t have an account? Contact admin.
          </Link> */}
          <Link
            target="_blank"
            href="https://joramwells.github.io/otz-terms-and-conditions"
            className="text-center text-blue-500 hover:underline text-[12px] "
          >
            Terms & Conditions
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
