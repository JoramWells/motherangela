'use client';

import {
  CartesianGrid, Line, LineChart, XAxis,
} from 'recharts';

import { MedicationStockTakeInterface } from 'motherangela';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function TimeSeriesChart({ data }:{data:MedicationStockTakeInterface[]}) {
  const chartData = data?.map((item) => ({
    desktop: Number(item.current_quantity),
    date: item.date_of_stock_take,
  }));
  return (

    <ChartContainer
      config={chartConfig}
      className="h-[250px] w-full bg-white rounded-lg"
    >
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={(value: Date) => {
            const date = new Date(value);
            return date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            });
          }}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
          labelFormatter={(value: Date) => new Date(value).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        />
        <Line
          dataKey="desktop"
          type="natural"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>

  );
}
