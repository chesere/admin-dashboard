"use client";
import React from "react";
import { motion } from "framer-motion";
import StartCard from "@/components/StartCard";
import { RotateCcw, UserCheck, UserPlus, UsersIcon } from "lucide-react";
import UsersTable from "@/components/UsersTable";

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-5"
        >
          <StartCard name="Total Clients" icon={UsersIcon} value="2020" />
          <StartCard name="New Clients" icon={UserPlus} value="3000" />
          <StartCard name="Active Clients" icon={UserCheck} value="1540" />
          <StartCard name="Returning Clients" icon={RotateCcw} value="1760" />
        </motion.div>
      </main>
      <UsersTable />
    </div>
  );
};

export default UsersPage;
