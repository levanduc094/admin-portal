'use client';
import InputField from 'components/fields/InputField';
import Default from 'components/auth/variants/DefaultAuthLayout';
import { FcGoogle } from 'react-icons/fc';
import Checkbox from 'components/checkbox';
import {
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import ClientSideProvider from 'app/clientSideProvider';

const SignInDefault = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      // redirect: false,
      callbackUrl:
        (new URLSearchParams(window.location.search).get(
          'callbackUrl',
        ) as string) || '/',
    });
  };
  return (
    <Default
      maincard={
        <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
          {/* Sign in section */}
          <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
              Sign In
            </h3>
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simmmple.com"
              id="email"
              type="text"
            />

            <InputField
              variant="auth"
              extra="mb-3"
              label="Password*"
              placeholder="Min. 8 characters"
              id="password"
              type="password"
            />
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="mt-2 flex items-center">
                <Checkbox />
                <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                  Keep me logged In
                </p>
              </div>
              <a
                className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                href=" "
              >
                Forgot Password?
              </a>
            </div>
            <button
              onClick={handleSubmit}
              className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              Sign In
            </button>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
                Not registered yet?
              </span>
              <a
                href="/auth/sign-up/default"
                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              >
                Create an account
              </a>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default SignInDefault;
