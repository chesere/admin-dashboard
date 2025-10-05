"use client";
import React from "react";
import { motion } from "framer-motion";
import StartCard from "@/components/StartCard";
import { RotateCcw, UserCheck, UserPlus, UsersIcon } from "lucide-react";

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          <StartCard name="Total Clients" icon={UsersIcon} value="2020" />
          <StartCard name="New Clients" icon={UserPlus} value="2020" />
          <StartCard name="Active Clients" icon={UserCheck} value="2020" />
          <StartCard name="Returning Clients" icon={RotateCcw} value="2020" />
        </motion.div>
      </main>
      UsersPage
    </div>
  );
};

export default UsersPage;
