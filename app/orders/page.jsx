"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, ShoppingBag, Ban } from "lucide-react";
import ordersData from "../../public/data/data.json";
import StartCard from "@/components/StartCard";
import OrdersTable from "@/components/OrdersTable";

const iconMap = {
  ShoppingBag,
  CheckCircle,
  Clock,
  Ban,
};
const OrdersPage = () => {
  return (
    <div className="flex-1 relative overflow-auto z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          {ordersData.orderStats.map(({ name, value, icon }) => {
            const IconComponent = iconMap[icon];
            return (
              <StartCard
                key={name}
                name={name}
                icon={IconComponent}
                value={value}
              />
            );
          })}
        </motion.div>
        <OrdersTable />
      </main>
    </div>
  );
};

export default OrdersPage;
