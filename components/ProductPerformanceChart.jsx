"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const ProductPerformanceChart = () => {
  const [productPerformanceData, setProductPerformanceData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setProductPerformanceData(data.productperformance));
  }, []);
  return (
    <motion.div
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mz-2 md:mx-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <h2 className="text-base md:text-xl font-semibold text-gray-100 mb-4 text-center md:text-left ">
        Product performance
      </h2>
    </motion.div>
  );
};

export default ProductPerformanceChart;
