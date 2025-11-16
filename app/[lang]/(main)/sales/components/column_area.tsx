"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type ColumnAreaProps = {
  activeTab: "unit" | "value";
  height?: number;
};

const ColumnArea = ({ activeTab, height = 300 }: ColumnAreaProps) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const [isDelay, setIsDelay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelay(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [activeTab]); // Optional: reset delay on tab change

  if (!isDelay) {
    return (
      <div className="col-span-1 bg-card p-4 rounded-md min-h-48">
        <div className="flex justify-center mt-10">
          <Skeleton className="h-44 w-full" />
        </div>
        <div className="flex justify-center space-x-3 mt-10">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    );
  }

  const series = {
    unit: [
      {
        name: "Last Month",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37],
      },
      {
        name: "Current Month",
        type: "area",
        data: [30, 25, 35, 40, 28, 33, 48, 50, 60, 45, 50, 55],
      },
    ],
    value: [
      {
        name: "Last Month",
        type: "column",
        data: [100, 120, 150, 130, 170, 180, 200, 220, 210, 230, 240, 250],
      },
      {
        name: "Current Month",
        type: "area",
        data: [110, 140, 160, 150, 190, 200, 210, 230, 250, 260, 270, 280],
      },
    ],
  };

  const activeData = series[activeTab];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
      title: {
        style: {
          color: `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`,
        },
      },
      min: 0,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: any) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),

    legend: {
      labels: {
        colors: `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 10,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: isRtl ? 5 : -5,
      },
    },
  };
  return (
    <Chart
      options={options}
      series={activeData}
      type="line"
      height={height}
      width={"100%"}
    />
  );
};

export default ColumnArea;
