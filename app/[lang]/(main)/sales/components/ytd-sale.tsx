import { Skeleton } from "@/components/ui/skeleton";
import { Triangle } from "lucide-react";
import React, { useEffect, useState } from "react";

type TabKey = "unit" | "value"; // should match the parent

type YtdSaleCardProps = {
  activeTab: TabKey;
};

const YtdSaleCard = ({ activeTab }: YtdSaleCardProps) => {
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

  const ytdSaleData = {
    unit: { sale: "6183", percentage: "20.35%", sply: "651", tgt: "1080" },
    value: { sale: "7000", percentage: "25.00%", sply: "700", tgt: "1100" },
  };

  const ytdTab = ytdSaleData[activeTab];

  return (
    <>
      <div className="col-span-1 bg-card p-4 rounded-md">
        <div className="">
          <h2 className="text-sm md:text-base lg:text-xl font-semibold">
            YTD Sales
          </h2>
        </div>

        <div className="flex justify-center mt-10">
          <h2 className="text-lg lg:text-4xl md:text-2xl font-semibold tracking-wide">
            {ytdTab.sale}
          </h2>
        </div>

        <p className="flex mt-3 items-center">
          <Triangle className="text-green-500 fill-green-500 w-3" />
          <span className="text-green-500  pl-2 text-sm md:text-base">
            {ytdTab.percentage}
          </span>
        </p>

        <div className="flex justify-between mt-1">
          <div className="flex">
            <h3 className="text-sm md:text-base">SPLY : </h3>
            <span className="text-sm md:text-base">{ytdTab.sply}</span>
          </div>
          <div className="flex">
            <h3 className="text-sm md:text-base">TGT : </h3>
            <span className="text-sm md:text-base">{ytdTab.tgt}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default YtdSaleCard;
