"use client";

import { Button } from "@/components/ui/button";
import React from "react";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleSignOut = () => {
    // Clear all user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rememberMe");

    // Redirect to login page
    router.push("/login");
  };
  return (
    <div className=" h-screen p-6 bg-gray-100">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard!</p>
      </div>
      <div className="mt-6">
        {/* Add your dashboard content here */}
        <p>This is where you can manage your activities and view statistics.</p>
        <Button className="mt-4 cursor-pointer" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}
