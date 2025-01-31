import React from 'react';
import { Button } from '@/components/ui/button';

function Step({ title }:{title:string}) {
  return (
    <Button
      size="sm"
      className="shadow-none"
      variant="ghost"
    >
      {title}
    </Button>
  );
}

export default Step;
