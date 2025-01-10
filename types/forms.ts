/* eslint-disable no-unused-vars */

import React from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CustomInputProps {
  label?: string
  placeholder?: string
  name?: string
  value?: string | number
  type?: string
  description?: string
  defaultValue?: string | number
  onChange: (value: any) => void
}

export interface InputEventProps extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    value: string
    name?: string
  }
}
