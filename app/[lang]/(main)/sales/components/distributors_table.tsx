"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TabKey = "unit" | "value"; // should match the parent
type TabTimeKey = "day" | "YTD" | "MTD";

type DistributorCardProps = {
  activeTab: TabKey;
  activeTimeTab : TabTimeKey;
};

interface ColumnProps {
  key: string;
  label: string;
}

const columns: ColumnProps[] = [
  { key: "desc", label: "Desc" },
  { key: "sale", label: "Sales" },
  { key: "ucc", label: "UCC" },
  { key: "repeat", label: "Repeat" },
];

interface DistributorProps {
  id: number;
  desc?: string;
  sale?: string;
  ucc?: string;
  repeat?: string;
}

const DistributorData: Record<
  "unit" | "value",
  Record<"day" | "MTD" | "YTD", DistributorProps[]>
> = {
  unit: {
    day: [
      { id: 1, desc: "Day-1st", sale: "200", ucc: "Active", repeat: "10" },
      { id: 2, desc: "Day-2nd", sale: "180", ucc: "Inactive", repeat: "8" },
      { id: 3, desc: "Day-3rd", sale: "220", ucc: "Active", repeat: "12" },
      { id: 4, desc: "Day-4th", sale: "150", ucc: "Pending", repeat: "6" },
    ],
    MTD: [
      { id: 1, desc: "MTD-1st", sale: "900", ucc: "Active", repeat: "50" },
      { id: 2, desc: "MTD-2nd", sale: "850", ucc: "Inactive", repeat: "40" },
      { id: 3, desc: "MTD-3rd", sale: "1000", ucc: "Active", repeat: "60" },
      { id: 4, desc: "MTD-4th", sale: "700", ucc: "Pending", repeat: "35" },
    ],
    YTD: [
      { id: 1, desc: "YTD-1st", sale: "4800", ucc: "Active", repeat: "300" },
      { id: 2, desc: "YTD-2nd", sale: "4100", ucc: "Inactive", repeat: "250" },
      { id: 3, desc: "YTD-3rd", sale: "5000", ucc: "Active", repeat: "320" },
      { id: 4, desc: "YTD-4th", sale: "3900", ucc: "Pending", repeat: "220" },
    ],
  },
  value: {
    day: [
      { id: 1, desc: "Day-1st", sale: "300", ucc: "Active", repeat: "15" },
      { id: 2, desc: "Day-2nd", sale: "270", ucc: "Inactive", repeat: "10" },
      { id: 3, desc: "Day-3rd", sale: "320", ucc: "Active", repeat: "18" },
      { id: 4, desc: "Day-4th", sale: "200", ucc: "Pending", repeat: "9" },
    ],
    MTD: [
      { id: 1, desc: "MTD-1st", sale: "1350", ucc: "Active", repeat: "70" },
      { id: 2, desc: "MTD-2nd", sale: "1200", ucc: "Inactive", repeat: "55" },
      { id: 3, desc: "MTD-3rd", sale: "1500", ucc: "Active", repeat: "80" },
      { id: 4, desc: "MTD-4th", sale: "950", ucc: "Pending", repeat: "45" },
    ],
    YTD: [
      { id: 1, desc: "YTD-1st", sale: "7000", ucc: "Active", repeat: "400" },
      { id: 2, desc: "YTD-2nd", sale: "6200", ucc: "Inactive", repeat: "360" },
      { id: 3, desc: "YTD-3rd", sale: "7500", ucc: "Active", repeat: "420" },
      { id: 4, desc: "YTD-4th", sale: "6000", ucc: "Pending", repeat: "310" },
    ],
  },
};


const DistributorCard = ({ activeTab, activeTimeTab }: DistributorCardProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key}>{column.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {DistributorData[activeTab][activeTimeTab].map((item) => (
          <TableRow key={item.id} className="hover:bg-default-100 md:text-base text-sm">
            <TableCell className="md:text-base text-sm">{item.desc}</TableCell>
            <TableCell className="md:text-base text-sm">{item.sale}</TableCell>
            <TableCell className="md:text-base text-sm">{item.ucc}</TableCell>
            <TableCell className="md:text-base text-sm">{item.repeat}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DistributorCard;
