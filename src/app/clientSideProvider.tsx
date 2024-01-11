'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export default function ClientSideProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
