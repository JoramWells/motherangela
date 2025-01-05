'use client'
import { store } from '@/lib/store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

const layout = ({children}:{children: ReactNode}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default layout