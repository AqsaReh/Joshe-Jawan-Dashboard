import { Skeleton } from "@/components/ui/skeleton";
import { Triangle } from "lucide-react";
import React, { useEffect, useState } from "react";

type TabKey = "unit" | "value"; // should match the parent

type MtdSaleCardProps = {
  activeTab: TabKey;
};

const MtdSaleCard = ({ activeTab }: MtdSaleCardProps) => {
  const [isDelay, setIsDelay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelay(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [activeTab]); // Optional: reset delay on tab change

  if (!isDelay) {
    return (
      <div className="col-span-1 bg-card p-4 rounded-md h-52 ">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-24" />
        </div>

        <div className="flex justify-center mt-10">
          <Skeleton className="h-6 w-32" />
        </div>

         <div className="flex justify-between w-64 mt-3 ">
          <Skeleton className="h-4 w-3" />
          <Skeleton className="h-4 w-12" />

          <Skeleton className="h-4 w-3" />
          <Skeleton className="h-4 w-12" />
        </div>

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

  const mtdSaleData = {
    unit: {
      sale: "1700",
      percentage1: "-33.38%",
      percentage2: "-27.21%",
      lm: "651",
      sply: "651",
      tgt: "1080",
    },
    value: {
      sale: "1800",
      percentage1: "-30.00%",
      percentage2: "-20.00%",
      lm: "700",
      sply: "700",
      tgt: "1100",
    },
  };

  const mtdTab = mtdSaleData[activeTab];

  return (
    <>
      <div className="col-span-1 bg-card p-4 rounded-md">
        <div className="">
          <h2 className="text-sm md:text-base lg:text-xl font-semibold">
            MTD Sale
          </h2>
        </div>

        <div className="flex justify-center mt-10">
          <h2 className="text-lg lg:text-4xl md:text-2xl font-semibold tracking-wide">
            {mtdTab.sale}
          </h2>
        </div>

        <div className="flex justify-between w-64 mt-3 ">
          <p className="flex items-center">
            <Triangle className="text-red-500 fill-red-500 w-3 rotate-180 " />
            <span className="text-red-500  pl-1 text-sm md:text-base">
              {mtdTab.percentage1}
            </span>
          </p>
          <p className="flex items-center">
            <Triangle className="text-red-500 fill-red-500 w-3 rotate-180" />
            <span className="text-red-500 pl-1 text-sm md:text-base">
              {mtdTab.percentage2}
            </span>
          </p>
        </div>

        <div className="flex justify-between mt-1">
          <div className="flex">
            <h3 className="text-sm md:text-base">LM : </h3>
            <span className="text-sm md:text-base">{mtdTab.lm}</span>
          </div>
          <div className="flex">
            <h3 className="text-sm md:text-base">SPLY : </h3>
            <span className="text-sm md:text-base">{mtdTab.sply}</span>
          </div>
          <div className="flex">
            <h3 className="text-sm md:text-base">TGT : </h3>
            <span className="text-sm md:text-base">{mtdTab.tgt}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MtdSaleCard;
