"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

interface PendingProps {
  sid: string | null;
}

const Pending: React.FC<PendingProps> = ({ sid }) => {
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch(
          `https://mock-api-login-abb.vercel.app/auth/v1/auth/check-status/asanimza?sid=${sid}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // Redirect to /organizations if the response is OK
        router.push("/az/organizations");
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    checkStatus();
  }, [sid, router]); // Include sid and router in the dependency array

  return <div>Pending....</div>;
};

export default Pending;
