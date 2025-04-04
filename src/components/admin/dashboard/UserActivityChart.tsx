
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';

interface UserActivityChartProps {
  data: Array<{
    name: string;
    Actifs: number;
    Nouveaux: number;
  }>;
  config: any;
}

const UserActivityChart: React.FC<UserActivityChartProps> = ({ data, config }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Utilisateurs</CardTitle>
        <CardDescription className="text-xs sm:text-sm">Utilisateurs actifs vs nouveaux utilisateurs</CardDescription>
      </CardHeader>
      <CardContent className="aspect-video">
        <ChartContainer config={config} className="h-full w-full">
          <>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis 
                  dataKey="name" 
                  className="text-[8px] sm:text-xs" 
                  tick={{ fontSize: 10 }} 
                />
                <YAxis className="text-[8px] sm:text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="Actifs" name="users" fill="#10b981" />
                <Bar dataKey="Nouveaux" name="newUsers" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
            <ChartLegend>
              <ChartLegendContent />
            </ChartLegend>
          </>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default UserActivityChart;
