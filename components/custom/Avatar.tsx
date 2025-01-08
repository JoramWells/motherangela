/* eslint-disable @typescript-eslint/no-unused-vars */
import { generateRandomColors } from "@/utils/generateRandomColors";
import React from "react";

import { useMemo } from "react";

const Avatar = ({ name, h = 6, w = 6 }: {name: string, h?: number, w?: number}) => {
  const fullName = name?.split(" ");
  const firstName = fullName ? fullName[0].charAt(0) : 'u';
  const secondName = fullName ? fullName[1]?.trim().charAt(0) : 'u';
  const randomColors = useMemo(() => generateRandomColors(), []);
  return (
    <div
      className={`rounded-full h-[20px] w-[20px]
    flex flex-row items-center justify-center text-[10px] text-white
    `}
      style={{
        backgroundColor: randomColors,
      }}
    >
      {firstName}
      {secondName}
    </div>
  );
};

export default Avatar;
