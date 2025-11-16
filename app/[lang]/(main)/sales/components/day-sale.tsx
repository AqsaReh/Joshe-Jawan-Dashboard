import { Triangle } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type TabKey = "unit" | "value"; // should match the parent

type DaySaleCardProps = {
  activeTab: TabKey;
};

const DaySaleCard = ({ activeTab }: DaySaleCardProps) => {
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
        <div className="flex justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>

        <div className="flex justify-center mt-10">
          <Skeleton className="h-6 w-32" />
        </div>

        <p className="flex mt-3 items-center gap-2">
          <Skeleton className="h-4 w-3" />
          <Skeleton className="h-4 w-12" />
        </p>

        <div className="flex justify-between mt-1">
          <div className="flex gap-2">
            <Skeleton className="h-4 w-6" />
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-4 w-6" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </div>
    );
  }

  const salesCardData = {
    unit: { sale: "1000", percentage: "10%", ld: "200", tgt: "1200" },
    value: { sale: "1500", percentage: "15%", ld: "300", tgt: "1800" },
  };

  const salesTab = salesCardData[activeTab];

  return (
    <>
      <div className="col-span-1 bg-card p-4 rounded-md">
        <div className="flex justify-between ">
          <h2 className="text-sm md:text-base lg:text-xl font-semibold">
            Day Sale
          </h2>
          <span>24-Apr</span>
        </div>

        <div className="flex justify-center mt-10">
          <h2 className="text-lg lg:text-4xl md:text-2xl font-semibold tracking-wide">
            {salesTab.sale}
          </h2>
        </div>

        <p className="flex mt-3 items-center">
          <Triangle className="text-green-500 fill-green-500 w-3" />
          <span className="text-green-500 pl-1 text-sm md:text-base">
            {salesTab.percentage}
          </span>
        </p>

        <div className="flex justify-between mt-1">
          <div className="flex">
            <h3 className="text-sm md:text-base">LD : </h3>
            <span className="text-sm md:text-base">{salesTab.ld}</span>
          </div>
          <div className="flex">
            <h3 className="text-sm md:text-base">TGT : </h3>
            <span className="text-sm md:text-base"> {salesTab.tgt}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaySaleCard;
