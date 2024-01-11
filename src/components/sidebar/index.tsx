/* eslint-disable */

import { HiX } from 'react-icons/hi';
import Links from './components/Links';

import SidebarCard from 'components/sidebar/components/SidebarCard';
import { IRoute } from 'types/navigation';

function SidebarHorizon(props: { routes: IRoute[]; [x: string]: any }) {
  const { routes, open, setOpen } = props;
  return (
    // <div
    //   className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
    //     open ? 'translate-x-0' : '-translate-x-96 xl:translate-x-0'
    //   }`}
    // >
    //   <span
    //     className="absolute right-4 top-4 block cursor-pointer xl:hidden"
    //     onClick={() => setOpen(false)}
    //   >
    //     <HiX />
    //   </span>

    //   <div className={`mx-[56px] mt-[50px] flex items-center`}>
    //     <div className="ml-1 mt-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
    //       EMS
    //     </div>
    //   </div>
    //   <div className="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />
    //   {/* Nav item */}

    //   <ul className="mb-auto pt-1">
    //     <Links routes={routes} />
    //   </ul>

    //   {/* Nav item end */}
    // </div>
    <>
      <aside
        id="sidebar"
        className="transition-width fixed left-0 top-0 z-20 flex hidden h-full w-64 flex-shrink-0 flex-col font-normal duration-75 lg:flex"
        aria-label="Sidebar"
      >
        <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
            <div className="flex-1 space-y-1 divide-y divide-gray-200 bg-white px-3 dark:divide-gray-700 dark:bg-gray-800">
              <ul className="mb-auto pt-1">
                <Links routes={routes} />
              </ul>
            </div>
          </div>
        </div>
      </aside>

      <div
        className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90"
        id="sidebarBackdrop"
      ></div>
    </>
  );
}

export default SidebarHorizon;
