"use client";

import React from "react";
import CountUp from "react-countup";
import { formatAmount } from "@/lib/utils";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimal="," prefix="$" end={amount} decimals={2} />
    </div>
  );
};

export default AnimatedCounter;
