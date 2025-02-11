/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable consistent-return */

'use client';

import {
  Label, PolarRadiusAxis, RadialBar, RadialBarChart,
} from 'recharts';

import moment from 'moment';
import { Calendar } from 'lucide-react';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartConfig = {
  male: {
    label: 'Male',
    color: 'hsl(var(--chart-1))',
  },
  female: {
    label: 'Female',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

interface CustomRadialInterface{
  data:{male:number, female:number}[]
  title: string
}

export default function CustomRadial({ data, title }: CustomRadialInterface) {
  const totalVisitors = data[0].male + data[0].female;

  return (
    <div className="flex flex-col w-1/4 ring ring-zinc-100
     bg-white rounded-lg border border-zinc-200
    "
    >
      <div className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-100 flex justify-between items-center ">
        <h3 className="font-semibold text-[14px]">{title}</h3>
        <div className="flex flex-row items-center space-x-1 text-slate-500">
          <Calendar size={12} />
          <p className="text-[12px] text-slate-500">{moment().format('ll')}</p>
        </div>
      </div>
      <ChartContainer
        config={chartConfig}
        className="aspect-square flex items-center  justify-center h-[200px]"
      >
        <RadialBarChart
          data={data ?? []}
          endAngle={360}
          innerRadius={70}
          outerRadius={130}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 16}
                        className="fill-foreground text-2xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 16}
                        className="fill-muted-foreground"
                      >
                        Patients
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="male"
            stackId="a"
            cornerRadius={5}
            fill="var(--color-male)"
            className="stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="female"
            fill="var(--color-female)"
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          />
        </RadialBarChart>
      </ChartContainer>

    </div>
  );
}
