import React, { type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface DataProps {
  label: string | ReactNode
  description?: string
  children: React.ReactNode
  width?: string
}

export default function CustomDialog({
  children, description, label, width,
}: DataProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="shadow-none border-slate-300"
        >
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className={`${width != null && `max-w-[${width}]`}  overflow-hidden overflow-y-auto `}>
        <DialogHeader>
          <DialogTitle>{description}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
