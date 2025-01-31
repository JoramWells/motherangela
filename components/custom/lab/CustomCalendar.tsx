'use client';

import { CalendarIcon } from 'lucide-react';

import { Dispatch, SetStateAction } from 'react';
import moment from 'moment';
import { Matcher } from 'react-day-picker';
// import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function CustomCalendar({ date, setDate }:{
    date: Date | string | undefined,
    setDate:Dispatch<SetStateAction<Date|undefined | string>>
}) {
  return (

    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="shadow-none"
          size="sm"
        >
          {date ? (
            moment(date).format('ll')
          ) : (
            <span>Pick a date</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 shadow-none" align="start">
        <Calendar
          mode="single"
          selected={date as Matcher as Date}
          onSelect={(value) => setDate(value)}
          disabled={(dateValue) => dateValue > new Date() || dateValue < new Date('1900-01-01')}
          initialFocus
        />
      </PopoverContent>
    </Popover>

  );
}
