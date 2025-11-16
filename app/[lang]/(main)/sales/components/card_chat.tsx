"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const CardChart = ({ height = 180 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [70, 30 ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 0,
    },
    labels: ["Team A", "Team B"],
    dataLabels: {
      enabled: false,
      style: {
        fontSize: "20px",
      },
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
 
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    legend: {
      show: false,
      labels: {
        colors: `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5,
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
      series={series}
      type="pie"
      height={height}
      width={"100%"}
    />
  );
};

export default CardChart;
