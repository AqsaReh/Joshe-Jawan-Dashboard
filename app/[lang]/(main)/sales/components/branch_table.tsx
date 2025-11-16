"use client"
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

type BranchCardProps = {
  activeTab: TabKey;
  activeTimeTab : TabTimeKey;
};

interface ColumnProps {
  key: string;
  label: string;
}
const columns: ColumnProps[] = [

  {
    key: "desc",
    label: "Desc",
  },
  {
    key: "sale",
    label: "Sales",
  },
  {
    key: "ucc",
    label: "UCC",
  },
  {
    key: "repeat",
    label: "Repeat",
  },
];
interface UserProps {
  id: number;
  desc?: string;
  sale?: string;
  ucc?: string;
  repeat?: string;
}

const BranchCardData: Record<
  "unit" | "value",
  Record<"day" | "MTD" | "YTD", UserProps[]>
> = {
  unit: {
    day: [
      { id: 1, desc: "Day-1st", sale: "200", ucc: "Active", repeat: "Yes" },
      { id: 2, desc: "Day-2nd", sale: "180", ucc: "Inactive", repeat: "No" },
      { id: 3, desc: "Day-3rd", sale: "220", ucc: "Active", repeat: "Yes" },
      { id: 4, desc: "Day-4th", sale: "150", ucc: "Pending", repeat: "No" },
    ],
    MTD: [
      { id: 1, desc: "MTD-1st", sale: "900", ucc: "Active", repeat: "Yes" },
      { id: 2, desc: "MTD-2nd", sale: "850", ucc: "Inactive", repeat: "No" },
      { id: 3, desc: "MTD-3rd", sale: "1000", ucc: "Active", repeat: "Yes" },
      { id: 4, desc: "MTD-4th", sale: "700", ucc: "Pending", repeat: "No" },
    ],
    YTD: [
      { id: 1, desc: "YTD-1st", sale: "4800", ucc: "Active", repeat: "Yes" },
      { id: 2, desc: "YTD-2nd", sale: "4100", ucc: "Inactive", repeat: "No" },
      { id: 3, desc: "YTD-3rd", sale: "5000", ucc: "Active", repeat: "Yes" },
      { id: 4, desc: "YTD-4th", sale: "3900", ucc: "Pending", repeat: "No" },
    ],
  },
  value: {
    day: [
      { id: 1, desc: "Day-1st", sale: "300", ucc: "Active", repeat: "Yes" },
      { id: 2, desc: "Day-2nd", sale: "270", ucc: "Inactive", repeat: "No" },
      { id: 3, desc: "Day-3rd", sale: "320", ucc: "Active", repeat: "Yes" },
      { id: 4, desc: "Day-4th", sale: "200", ucc: "Pending", repeat: "No" },
    ],
    MTD: [
      { id: 1, desc: "MTD-1st", sale: "1350", ucc: "Active", repeat: "Yes" },
      { id: 2, desc: "MTD-2nd", sale: "1200", ucc: "Inactive", repeat: "No" },
      { id: 3, desc: "MTD-3rd", sale: "1500", ucc: "Active", repeat: "Yes" },
      { id: 4, desc: "MTD-4th", sale: "950", ucc: "Pending", repeat: "No" },
    ],
    YTD: [
      { id: 1, desc: "YTD-1st", sale: "7000", ucc: "Active", repeat: "Yes" },
      { id: 2, desc: "YTD-2nd", sale: "6200", ucc: "Inactive", repeat: "No" },
      { id: 3, desc: "YTD-3rd", sale: "7500", ucc: "Active", repeat: "Yes" },
      { id: 4, desc: "YTD-4th", sale: "6000", ucc: "Pending", repeat: "No" },
    ],
  },
};



const BranchTableCard = ({ activeTab, activeTimeTab }: BranchCardProps) => {
  return (
   <Table>
         <TableHeader>
           <TableRow>
             {
               columns.map((column:ColumnProps) => (
                 <TableHead key={column.key}>
                   {column.label}
                 </TableHead>
               ))
             }
           </TableRow>
         </TableHeader>
         <TableBody>
         {BranchCardData[activeTab][activeTimeTab].map((item: UserProps) => (
             <TableRow key={item.id} className="hover:bg-default-100 md:text-base text-xs">
               <TableCell className="md:text-base text-xs">{item.desc}</TableCell>
               <TableCell className="md:text-base text-xs">{item.sale}</TableCell>
               <TableCell className="md:text-base text-xs">{item.ucc}</TableCell>
               <TableCell className="md:text-base text-xs">{item.repeat}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
  );
};

export default BranchTableCard;
