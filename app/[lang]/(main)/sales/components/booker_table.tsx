"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ColumnProps {
  key: string;
  label: string;
}
const columns: ColumnProps[] = [
  {
    key: "name",
    label: "Name",
  },
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
interface BookerProps {
  id: number;
  name: string;
  desc?: string;
  sale?: string;
  ucc?: string;
  repeat?: string;
}

const BookerData: Record<
  "unit" | "value",
  Record<"day" | "MTD" | "YTD", BookerProps[]>
> = {
  unit: {
    day: [
      { id: 1, name: "Booker", desc: "Day-1st", sale: "300", ucc: "40", repeat: "15" },
      { id: 2, name: "Booker", desc: "Day-2nd", sale: "280", ucc: "42", repeat: "12" },
      { id: 3, name: "Booker", desc: "Day-3rd", sale: "350", ucc: "38", repeat: "18" },
      { id: 4, name: "Booker", desc: "Day-4th", sale: "250", ucc: "35", repeat: "10" },
    ],
    MTD: [
      { id: 1, name: "Booker", desc: "MTD-1st", sale: "1200", ucc: "100", repeat: "50" },
      { id: 2, name: "Booker", desc: "MTD-2nd", sale: "980", ucc: "95", repeat: "45" },
      { id: 3, name: "Booker", desc: "MTD-3rd", sale: "1500", ucc: "110", repeat: "60" },
      { id: 4, name: "Booker", desc: "MTD-4th", sale: "450", ucc: "90", repeat: "40" },
    ],
    YTD: [
      { id: 1, name: "Booker", desc: "YTD-1st", sale: "7200", ucc: "600", repeat: "300" },
      { id: 2, name: "Booker", desc: "YTD-2nd", sale: "6900", ucc: "580", repeat: "290" },
      { id: 3, name: "Booker", desc: "YTD-3rd", sale: "8000", ucc: "620", repeat: "310" },
      { id: 4, name: "Booker", desc: "YTD-4th", sale: "5000", ucc: "550", repeat: "280" },
    ],
  },
  value: {
    day: [
      { id: 1, name: "Booker", desc: "Day-1st", sale: "450", ucc: "55", repeat: "20" },
      { id: 2, name: "Booker", desc: "Day-2nd", sale: "390", ucc: "50", repeat: "18" },
      { id: 3, name: "Booker", desc: "Day-3rd", sale: "470", ucc: "52", repeat: "22" },
      { id: 4, name: "Booker", desc: "Day-4th", sale: "310", ucc: "49", repeat: "19" },
    ],
    MTD: [
      { id: 1, name: "Booker", desc: "MTD-1st", sale: "1800", ucc: "120", repeat: "70" },
      { id: 2, name: "Booker", desc: "MTD-2nd", sale: "1050", ucc: "110", repeat: "65" },
      { id: 3, name: "Booker", desc: "MTD-3rd", sale: "1750", ucc: "115", repeat: "60" },
      { id: 4, name: "Booker", desc: "MTD-4th", sale: "700", ucc: "108", repeat: "55" },
    ],
    YTD: [
      { id: 1, name: "Booker", desc: "YTD-1st", sale: "8200", ucc: "700", repeat: "370" },
      { id: 2, name: "Booker", desc: "YTD-2nd", sale: "7500", ucc: "680", repeat: "350" },
      { id: 3, name: "Booker", desc: "YTD-3rd", sale: "9000", ucc: "720", repeat: "390" },
      { id: 4, name: "Booker", desc: "YTD-4th", sale: "6400", ucc: "670", repeat: "330" },
    ],
  },
};


type TabKey = "unit" | "value"; // should match the parent
type TabTimeKey = "day" | "YTD" | "MTD";

type BookerCardProps = {
  activeTab: TabKey;
  activeTimeTab : TabTimeKey;
};


const BookerTable = ({ activeTab, activeTimeTab }: BookerCardProps) => {
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
        {BookerData[activeTab][activeTimeTab].map((item: BookerProps) => (
            <TableRow key={item.id} className="hover:bg-default-100 md:text-base text-sm">

              <TableCell className="md:text-base text-sm">{item.name}</TableCell>
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

export default BookerTable;
