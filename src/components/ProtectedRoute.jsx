"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
    
  useEffect(() => {
    const token = Cookies.get("authToken");
    if (!token) {
      router.push("/login"); 
    } else {
      // setIsAuthenticated(true);
    }
  }, [router]);   
  if (!isAuthenticated) return null; // avoid rendering page

  return <>{children}</>;
}
