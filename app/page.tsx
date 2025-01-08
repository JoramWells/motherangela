import React, { useId } from 'react';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-2">
      <div className="flex flex-row space-x-2">
        {[
          { id: useId(), link: '/administrator/pharmacy', label: 'Administrator' },
          { id: useId(), link: '/appointments', label: 'Appointments' },
          { id: useId(), link: '/maternity', label: 'Maternity' },
          { id: useId(), link: '/patients', label: 'Patients' },
          { id: useId(), link: '/payroll', label: 'Payroll' },
          { id: useId(), link: '/pharmacy', label: 'Pharmacy' },
        ].map((item) => (
          <div className="flex-1 border rounded-lg p-2 h-[100px]" key={item.id}>
            <Link href={item.link}>{item.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
