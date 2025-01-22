'use client';

import {
  Bar, BarChart, CartesianGrid, XAxis,
} from 'recharts';

import { useMemo } from 'react';
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

interface AppointmentBarChartInputProps {
  ward_name: string
}

// type ChartConfig = Record<string, { label: string, color: string }>

const colorSet = [1, 2, 3, 4, 5];
let colorIndex = 0;

const getNextColor = () => {
  const nextColor = colorSet[colorIndex % colorSet.length];
  colorIndex += 1;
  return `hsl(var(--chart-${nextColor}))`;
};

interface BarChartInputParams {
  data: AppointmentBarChartInputProps[]
  label: string
  dataKey: string

}

export default function CustomBarChart({ data, label, dataKey }: BarChartInputParams) {
  const chartConfig = useMemo(() => {
    const config: ChartConfig = {};
    data?.forEach((item) => {
      const agendaDescription = item[label as keyof AppointmentBarChartInputProps];
      if (!config[agendaDescription]) {
        config[agendaDescription] = {
          label: agendaDescription,
          color: getNextColor(),
        };
      }
    });

    return config;
  }, [data, label]);

  // const chartData = transformDataToCart()
  // const chartData = groupAppointmentsByDay(data)
  const chartData = data;

  // const chartConfig = generateChartConfig(data)

  return (
    <div className="h-[300px] flex-1 bg-white border rounded-lg border-zinc-200">
      <div
        className="flex flex-row items-center justify-between bg-zinc-50 border-b border-zinc-100
      p-2 rounded-t-lg
      "
      >
        <h4 className="font-semibold text-zinc-900 text-[14px]">Upcoming Analysis Distribution</h4>
      </div>
      <ChartContainer config={chartConfig} className="aspect-auto h-[250px] ">
        <BarChart
          accessibilityLayer
          data={chartData || []}
          margin={{
            top: 20,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={dataKey}
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              });
            }}
          />
          <ChartTooltip
            // cursor={false}
            content={(
              <ChartTooltipContent
                label={(value: string | number | Date) => new Date(value).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              />
            )}
          />
          <ChartLegend content={<ChartLegendContent />} />
          {Object.keys(chartConfig).map((key) => (
            <Bar
              key={key}
              dataKey={key}
              fill={chartConfig[key].color}
              radius={5}
              stackId="a"
            />
          ))}
        </BarChart>
      </ChartContainer>
    </div>
  );
}
