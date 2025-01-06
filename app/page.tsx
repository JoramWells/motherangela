import React from "react";

import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2">
      <div className="flex flex-row space-x-2">
        {[
          { id: 1, link: "/appointments", label: "Appointments" },
          { id: 2, link: "/maternity", label: "Maternity" },
          { id: 3, link: "/patients", label: "Patients" },
          { id: 4, link: "/payroll", label: "Payroll" },
        ].map((item) => (
          <div className="flex-1 border rounded-lg p-2 h-[100px]" key={item.id}>
            <Link href={item.link}>{item.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
