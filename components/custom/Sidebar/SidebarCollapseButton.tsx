/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

'use client';

// import "../../globals.css";
// import Link from 'next/link'
import { ChevronRight, ChevronDown } from 'lucide-react';
import {
  ReactNode, useEffect, useMemo, useState,
} from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SidebarSubButton } from './SidebarButton';

interface SideBarCollapseButtonProps {
  icon?: ReactNode
  label: string
  link?: string
  itemList?: Array<{
    id?: string
    link: string
    label: string
  }>
}

export function SidebarCollapseButton({
  label = 'Dashboard',
  link,
  itemList,
  icon = <div />,
}: SideBarCollapseButtonProps) {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isActive = useMemo(() => {
    if (link !== null) {
      return pathname.includes(link!);
    }
    // return pathname.includes(label.toLowerCase())
    // const regex = new RegExp(`\\b${link}\\b`, 'i') // Matches the `link` as a full word, case-insensitive
    return pathname.includes(link);
  }, [pathname, link]);

  const [isLinkActive, setIsLinkActive] = useState(false);

  useEffect(() => {
    const arr: string[] = [];
    if (itemList && itemList?.length > 0) {
      itemList.map((item) => arr.push(item.link));
    }
    setIsLinkActive(arr.includes(pathname));
  }, [itemList, pathname]);

  // console.log(isL)

  const onToggle = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <Button
        onClick={onToggle}
        className={`flex items-center text-[12px]  pl-2 pr-4 justify-between text-[#F3FAFF]/[.8]  text-sm rounded-none w-full bg-transparent shadow-none
        overflow-y-auto hover:bg-sky-900 transition delay-150 ease-in-out hover:text-[#F3FAFF] ${
         (isLinkActive || isActive) && 'bg-gradient-to-r from-sky-700 to-sky-950 text-white border-l-4 rounded-l-sm'
        }
        `}
      >
        <div className="flex flex-row items-center space-x-2">
          {icon}

          {link == null ? (
            <p
              className={`text-capitalize font-normal text-[12px] ${
                isActive ? 'text-sky-600' : 'black'
              }`}
            >
              {label}
              {' '}
            </p>
          ) : (
            <Link
              href={`${link}`}
              className="capitalize font-normal text-[12px] "
            >
              {label}
            </Link>
          )}
        </div>

        {/* ceck if item list is more tan 1 */}
        {itemList != null && itemList?.length > 0 && (
          visible ? <ChevronDown size={16} /> : <ChevronRight size={16} />
        )}
      </Button>

      {itemList != null && itemList?.length > 0 && (
        <div
          className={`${
            visible ? 'inline' : 'hidden'
          } bg-gray-500 duration-100`}
        >
          {itemList?.map((item) => (
            <SidebarSubButton
              key={item.id}
              label={item.label}
              link={item.link}
            />
          ))}
        </div>
      )}
    </>
  );
}
