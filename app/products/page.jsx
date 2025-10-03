"use client";
import React from "react";
import { motion } from "framer-motion";
import StartCard from "@/components/StartCard";
import {
  ChartBarStacked,
  DollarSign,
  ShoppingBag,
  SquareActivity,
} from "lucide-react";

const ProductPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:gir-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StartCard name="Total Products" icon={ShoppingBag} value={"4,100"} />
          <StartCard
            name="Total Stock"
            icon={SquareActivity}
            value={"14,000"}
          />
          <StartCard name="Total Sold" icon={DollarSign} value={"2,800"} />
          <StartCard name="Total Categories" icon={ChartBarStacked} value={6} />
        </motion.div>
      </main>
    </div>
  );
};

export default ProductPage;
