import React, { useEffect, useState } from "react";
import CardChart from "./card_chat";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export interface ColumnConfig {
  key: string;
  label: string;
}

export const columns: ColumnConfig[] = [
  { key: "exis", label: "exis" },
  { key: "value", label: "value" },
];

interface DataRow {
  id: number;
  exis: string;
  value: string;
}

// Data for 'unit' and 'value' tabs
const totalUniverse = {
  unit: {
    universe: "123",
    data: [
      { id: 1, exis: "UCC Count", value: "1200" },
      { id: 2, exis: "Existence", value: "30%" },
      { id: 3, exis: "Repeat Orders", value: "200" },
    ],
  },
  value: {
    universe: "593",
    data: [
      { id: 1, exis: "UCC Count", value: "2.5M" },
      { id: 2, exis: "Existence", value: "40%" },
      { id: 3, exis: "Repeat Orders", value: "1.2M" },
    ],
  },
};

// Component now accepts a prop to determine which tab's data to render
interface UniverseTableProps {
  activeTab: "unit" | "value";
}

type TabKey = "unit" | "value"; // should match the parent

type TotalUniverseCardProps = {
  activeTab: TabKey;
};

const TotalUniverseCard = ({ activeTab }: TotalUniverseCardProps) => {
  const [isDelay, setIsDelay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelay(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [activeTab]); // Optional: reset delay on tab change

  if (!isDelay) {
    return (
      <div className="flex flex-col col-span-1 bg-card p-4 rounded-md">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-6 w-20" />
        </div>

        {/* Chart Skeleton */}
        <div className="flex items-center justify-center mb-4 h-32">
          <Skeleton className="w-full h-full rounded-md" />
        </div>

        {/* Table Skeleton */}
        <div>
          <Table>
            <TableBody>
              {Array.from({ length: 3 }).map((_, index) => (
                <TableRow key={index} className="md:text-base text-xs">
                  <TableCell className="text-xs">
                    <Skeleton className="h-4 w-24" />
                  </TableCell>
                  <TableCell className="text-xs w-14">
                    <Skeleton className="h-4 w-12" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  const data = totalUniverse[activeTab];
  return (
    <>
      <div className="flex flex-col col-span-1 bg-card p-4 rounded-md">
        <div className="flex justify-between">
          <h3 className=" text-sm md:text-base lg:text-lg font-semibold">
            Total Universe
          </h3>
          <span className="font-semibold text-lg md:text-xl lg:text-2xl">
            {totalUniverse[activeTab].universe}
          </span>
        </div>

        <div className="flex items-center justify-center">
          <CardChart />
        </div>

        <Table>
          <TableBody>
            {data.data.map((item) => (
              <TableRow
                key={item.id}
                className="hover:bg-default-100 md:text-base text-xs"
              >
                <TableCell className="text-xs">{item.exis}</TableCell>
                <TableCell className="text-xs w-14">{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default TotalUniverseCard;
