"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ChevronUp, Triangle } from "lucide-react";
import CardChart from "./components/card_chat";
import DistributorTable from "./components/distributors_table";
import BranchTable from "./components/branch_table";
import BookerTable from "./components/booker_table";
import ColumnArea from "./components/column_area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DaySaleCard from "./components/day-sale";
import MtdSaleCard from "./components/mtd-sale";
import YtdSaleCard from "./components/ytd-sale";
import TotalUniverseCard from "./components/total-universe-card";

interface Distributor {
  Dist_ID: string;
  DIst_Desc: string;
}

interface DistributorGroup {
  Group_ID: string;
  Group_Desc: string;
  Distributors: Distributor[];
}

type TabKey = "value" | "unit";

interface TabCardData {
  date?: string;
  sale: number;
  percentage?: string;
  percentage2?: string; // for 2nd percentage in MTD card
  ld?: number;
  tgt?: number;
  sply?: number; // for SPLY in YTD/MTD card
  lm?: number; // for LM in MTD card
  color: "green" | "red";
  triangleRotate?: boolean; // for rotated triangle in MTD card
}

interface CardData {
  title: string;
  values: Record<TabKey, TabCardData>;
}

// dummy data for DistributorGroup
const groupData = [
  {
    id: 1,
    Name: "group A",
    Distributions: [{ id: 1, Name: "Distribution A" }],
  },
  {
    id: 2,
    Name: "group B",
    Distributions: [
      { id: 1, Name: "Distribution B" },
      { id: 2, Name: "Distribution C" },
      { id: 3, Name: "Distribution L" },
    ],
  },
  {
    id: 3,
    Name: "group C",
    Distributions: [
      { id: 1, Name: "Distribution X" },
      { id: 2, Name: "Distribution Y" },
    ],
  },
  {
    id: 4,
    Name: "group D",
    Distributions: [{ id: 1, Name: "Distribution D" }],
  },
  {
    id: 5,
    Name: "group E",
    Distributions: [
      { id: 1, Name: "Distribution E" },
      { id: 2, Name: "Distribution F" },
    ],
  },
];

const ytdSaleData = {
  unit: { sale: "6183", percentage: "20.35%", sply: "651", tgt: "1080" },
  value: { sale: "7000", percentage: "25.00%", sply: "700", tgt: "1100" },
};

interface SalesDashboardPageViewProps {
  trans: {
    [key: string]: string;
  };
}

const SalesDashboardPageView = ({ trans }: SalesDashboardPageViewProps) => {
  const [selected, setSelected] = useState<"value" | "unit" | null>(null);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("value");
  const [timeTab, setTimeTab] = useState<"day" | "MTD" | "YTD">("day");

  const allDistributions = [
    "Distribution A",
    "Distribution B",
    "Distribution C",
    "Distribution D",
    "Distribution E",
  ];

  // Map each group to its filtered distribution list
  const groupDistributionMap: { [key: string]: string[] } = {
    "group A": ["Distribution A"],
    "group B": ["Distribution B", "Distribution C", "Distribution L"],
    "group C": ["Distribution X", "Distribution Y"],
    "group D": ["Distribution D"],
    "group E": ["Distribution E", "Distribution F"],
  };

  const filteredDistributions: string[] = selectedGroup
    ? groupDistributionMap[selectedGroup] || []
    : allDistributions;

  const [selectedDuration, setSelectedDuration] = useState<
    "day" | "mtd" | "ytd" | null
  >(null);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setIsLoading(true);
      setShowOptions(false);

      // Simulate loading delay
      setTimeout(() => {
        setIsLoading(false);
        setShowOptions(true);
      }, 2000);
    } else {
      setShowOptions(false); // Hide options again when closed
    }
  };

  return (
    <>
      <div className="">
        <h1 className="font-semibold text-2xl my-3">Sales Dashboard</h1>

        {/* First Section  */}

        <div className=" grid grid-cols-2 lg:grid-cols-5 gap-5 ">
          <div className="col-span-1">
            <Select onValueChange={(value) => setSelectedGroup(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Groups</SelectItem>{" "}
                {/* Optional to reset */}
                <SelectItem value="group A">Group A</SelectItem>
                <SelectItem value="group B">Group B</SelectItem>
                <SelectItem value="group C">Group C</SelectItem>
                <SelectItem value="group D">Group D</SelectItem>
                <SelectItem value="group E">Group E</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-1">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Distribution" />
              </SelectTrigger>
              <SelectContent>
                {filteredDistributions.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-1">
            <Select onOpenChange={handleOpenChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select SKU" />
              </SelectTrigger>
              <SelectContent>
                {isLoading ? (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    Loading...
                  </div>
                ) : showOptions ? (
                  <>
                    <SelectItem value="SKU A">SKU A</SelectItem>
                    <SelectItem value="SKU B">SKU B</SelectItem>
                    <SelectItem value="SKU C">SKU C</SelectItem>
                    <SelectItem value="SKU D">SKU D</SelectItem>
                    <SelectItem value="SKU E">SKU E</SelectItem>
                  </>
                ) : null}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-1">
            <Input type="month" placeholder="Month" />
          </div>

          <div className="col-span-1">
            <div className="flex space-x-3 ">
              <Tabs
                value={activeTab}
                onValueChange={(value) => setActiveTab(value as TabKey)}
                className="md:w-[400px]"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="value">Value</TabsTrigger>
                  <TabsTrigger value="unit">Unit</TabsTrigger>
                </TabsList>
                <TabsContent value="value"></TabsContent>
                <TabsContent value="unit"></TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* 2nd Section */}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
          {/* first card */}

          <DaySaleCard activeTab={activeTab} />

          {/* 2nd card */}

          <YtdSaleCard activeTab={activeTab} />
          {/* 3rd card */}

          <MtdSaleCard activeTab={activeTab} />
        </div>

        {/* 3rd Section */}

        <div className="mt-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="lg:col-span-3 md:col-span-1 col-span-1 bg-card rounded-md">
            <ColumnArea activeTab={activeTab} />
          </div>
          {/* 4th card */}
          <div className="lg:col-span-1 md:col-span-1 col-span-1 bg-card rounded-md">
            <TotalUniverseCard activeTab={activeTab} />
          </div>
        </div>

        {/* buttons */}

        <div className="flex justify-center mt-5 ">
          <div className="flex">
            {" "}
            <Tabs defaultValue="day" className="md:w-[600px]" onValueChange={(val) => setTimeTab(val as "day" | "MTD" | "YTD")}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="MTD">MTD</TabsTrigger>
                <TabsTrigger value="YTD">YTD</TabsTrigger>
              </TabsList>
              <TabsContent value="day">{/* content here */}</TabsContent>
              <TabsContent value="MTD">{/* content here */}</TabsContent>
              <TabsContent value="YTD">{/* content here */}</TabsContent>
            </Tabs>
          </div>
        </div>

        {/* 4th section */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          {/* first card */}
          <div className="col-span-1 bg-card rounded-md">
            <h2 className="md:text-lg lg:text-xl ml-3 my-3 text-base">
              Distributors
            </h2>
            <DistributorTable activeTab={activeTab} activeTimeTab={timeTab} />
          </div>
          {/* 2nd card */}
          <div className="col-span-1 bg-card rounded-md">
            <h2 className="md:text-lg lg:text-xl ml-3 my-3 text-base">
              Branch
            </h2>
            <BranchTable activeTab={activeTab} activeTimeTab={timeTab} />
          </div>
          {/* 3rd card */}
          <div className="col-span-1 bg-card rounded-md">
            <h2 className="md:text-lg lg:text-xl ml-3 my-3 text-base">
              Booker
            </h2>
            <BookerTable activeTab={activeTab} activeTimeTab={timeTab} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesDashboardPageView;
