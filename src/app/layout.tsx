import React, { ReactNode } from 'react';
import AppWrappers from './AppWrappers';
import ClientSideProvider from './clientSideProvider';
// import '@asseinfo/react-kanban/dist/styles.css';
// import '/public/styles/Plugins.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css"
          rel="stylesheet"
        />
      </head> */}
      <body id={'root'}>
        <ClientSideProvider>
          <AppWrappers>{children}</AppWrappers>
        </ClientSideProvider>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
