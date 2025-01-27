'use client';

import { Provider } from 'react-redux';
import '../globals.css';
import React from 'react';
import { store } from '@/lib/store';

// import { Providers } from '../providers'

function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider
      store={store}
    >
      {children}
    </Provider>
  );
}

export default PatientLayout;
