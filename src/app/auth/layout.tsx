'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { SidebarContext } from 'contexts/SidebarContext';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { isWindowAvailable } from 'utils/navigation';
import FixedPlugin from 'components/fixedPlugin/FixedPlugin';

// Custom Chakra theme

interface AuthProps extends PropsWithChildren {}

export default function AuthLayout({ children }: AuthProps) {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      // redirect('/');
      router.push(
        (new URLSearchParams(window.location.search).get(
          'callbackUrl',
        ) as string) || '/',
      );
    }
  }, [sessionStatus]);
  if (isWindowAvailable()) document.documentElement.dir = 'ltr';
  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full dark:!bg-navy-900">
        <main className={`mx-auto min-h-screen`}>{children}</main>
      </div>
    </div>
  );
}
