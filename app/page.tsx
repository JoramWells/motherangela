import React from "react";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href={"/patients"}>Patients</Link>
        <Link href={"/appointments"}>Appointments</Link>
      </div>
    </div>
  );
}
