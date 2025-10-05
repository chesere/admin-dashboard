"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const UsersTable = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("/data/data.json");
        const data = await res.json();
        setClients(data.clients);
      } catch (error) {
        console.error("Error fetching Clients", error);
      }
    };
    fetchClients();
  }, []);
  return <div>UsersTable</div>;
};

export default UsersTable;
